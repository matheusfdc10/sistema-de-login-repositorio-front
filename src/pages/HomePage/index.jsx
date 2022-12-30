import { useContext, useEffect, useState } from 'react'
import Repositories from '../../components/Repositories'
import Search from '../../components/Search'
import { AuthContext } from '../../contexts/auth'
import { createRepository, destroyRepository, getRepositories, updateRepository } from '../../services/api'
import './style.css'
import {  toast } from 'react-toastify';


export default function HomePage() {
    const { user } = useContext(AuthContext)
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        loadData()
        // (async () => loadData())();
    }, [user])

    const loadData = async (query = '') => {
        try{
            const response = await getRepositories(query)
            setRepositories(response.data)
            setLoading(false)
        } catch(err) {
            return toast.error(err.response?.data.msg)
        }
    }
    
    const handleDeleteRepo = async (repository) => {
        try {
            const response = await destroyRepository(repository._id)
            await loadData()
            
            toast.success(response.data.msg)
        } catch(err) {
            return toast.error(err.response?.data.msg)
        }
    }

    const handleNewRepo = async (url) => {
        try {
            const response = await createRepository(url)
            await loadData()

            toast.success(response.data.msg)
        } catch(err) {
            toast.error(err.response?.data.msg)
        }
    }

    const handleUpdateRepo = async (repository, newRepository) => {
        try {
            const response = await updateRepository(repository._id, newRepository)
            await loadData()

            toast.success(response.data.msg)
            return true
        } catch(err) {
            toast.error(err.response?.data.msg)
            return false
        }
    }

    if (loading) {
        return (
            <div className="loading">
                Carregando...
            </div>
        ) 
    }

    return(
        <>  
            
            <Search
                loadData={loadData}
                lengthRepository={repositories.length}
            />
            <Repositories 
                repositories={repositories} 
                handleDeleteRepo={handleDeleteRepo} 
                handleNewRepo={handleNewRepo}
                handleUpdateRepo={handleUpdateRepo}
            />
        </>
    )
}