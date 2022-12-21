import { useContext, useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import Repositories from '../../components/Repositories'
import Search from '../../components/Search'
import { AuthContext } from '../../contexts/auth'
import { createRepository, destroyRepository, getRepositories, updateRepository } from '../../services/api'
import './style.css'
import {  toast } from 'react-toastify';

export default function MainPage() {
    const { user, logout } = useContext(AuthContext)
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    // const [ loadingError, setLoadingError ] = useState(false)

    const loadData = async (query = '') => {
        try{
            const response = await getRepositories(user?.id, query)
            setRepositories(response.data)
            setLoading(false)
        } catch(err) {
            return toast.error(err.response?.data.msg)
            // setLoadingError(true)
        }
    }

    useEffect(() => {
        (async () => loadData())();
    }, [])

    const handleLogout = () => {
        logout()
        toast.success('Sessão finalizada!')
    }

    const handleSearch = (query) => {
        loadData(query)
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
            // setLoadingError(true)
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

    // if (loadingError) {
    //     return (
    //         <div className="loading">
    //             Erro ao carregar dados do repositório. <Link to="login">Voltar</Link>
    //         </div>
    //     ) 
    // }

    if (loading) {
        return (
            <div className="loading">
                Carregando...
            </div>
        ) 
    }

    return(
        <>
            <Nav handleLogout={handleLogout} nameUser={user.name}/>
            <Search handleSearch={handleSearch}/>
            <Repositories 
                repositories={repositories} 
                handleDeleteRepo={handleDeleteRepo} 
                handleNewRepo={handleNewRepo}
                handleUpdateRepo={handleUpdateRepo}
            />
        </>
    )
}