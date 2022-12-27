import { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Repositories from '../../components/Repositories'
import Search from '../../components/Search'
import { AuthContext } from '../../contexts/auth'
import { createRepository, destroyRepository, getRepositories, updateRepository } from '../../services/api'
import './style.css'
import {  toast } from 'react-toastify';


export default function MainPage() {
    const { user, logout } = useContext(AuthContext)
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        loadData()
        // (async () => loadData())();
    }, [user])

    const loadData = async (query = '') => {
        try{
            const response = await getRepositories(user?.id, query)
            setRepositories(response.data)
            setLoading(false)
        } catch(err) {
            return toast.error(`${err.response?.data.msg} 4`)
        }
    }
    
    const handleDeleteRepo = async (repository) => {
        try {
            const response = await destroyRepository(user?.id, repository._id)
            await loadData()
            
            toast.success(response.data.msg)
        } catch(err) {
            return toast.error(err.response?.data.msg)
        }
    }

    const handleNewRepo = async (url) => {
        try {
            const response = await createRepository(user?.id, url)
            await loadData()

            toast.success(response.data.msg)
        } catch(err) {
            toast.error(err.response?.data.msg)
        }
    }

    const handleUpdateRepo = async (repository, newRepository) => {
        try {
            const response = await updateRepository(user?.id, repository._id, newRepository)
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
            <Header 
                handleLogout={logout} 
                nameUser={user.name}
            />
            <Search 
                loadData={loadData}
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