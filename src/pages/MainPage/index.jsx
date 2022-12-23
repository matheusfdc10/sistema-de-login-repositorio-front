import { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Repositories from '../../components/Repositories'
import Search from '../../components/Search'
import { AuthContext } from '../../contexts/auth'
import { createRepository, destroyRepository, getRepositories, updateRepository } from '../../services/api'
import './style.css'
import {  toast } from 'react-toastify';

export const loadData = async (user, setRepositories, setLoading, query = '') => {
    try{
        const response = await getRepositories(user?.id, query)
        setRepositories(response.data)
        setLoading(false)
    } catch(err) {
        return toast.error(err.response?.data.msg)
        // setLoadingError(true)
    }
}

export default function MainPage() {
    const { user, logout } = useContext(AuthContext)
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    // const [ loadingError, setLoadingError ] = useState(false)

    useEffect(() => {
        loadData(user, setRepositories, setLoading)
        // (async () => loadData())();
    }, [user])

    const handleDeleteRepo = async (repository) => {
        try {
            const response = await destroyRepository(user?.id, repository._id)
            await loadData(user, setRepositories, setLoading,)
            
            toast.success(response.data.msg)
        } catch(err) {
            return toast.error(err.response?.data.msg)
        }
    }

    const handleNewRepo = async (url) => {
        try {
            const response = await createRepository(user?.id, url)
            await loadData(user, setRepositories, setLoading,)

            toast.success(response.data.msg)
        } catch(err) {
            toast.error(err.response?.data.msg)
            // setLoadingError(true)
        }
    }

    const handleUpdateRepo = async (repository, newRepository) => {
        try {
            const response = await updateRepository(user?.id, repository._id, newRepository)
            await loadData(user, setRepositories, setLoading,)

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
            <Header handleLogout={logout} nameUser={user.name}/>
            <Search user={user} setRepositories={setRepositories} setLoading={setLoading} loadData={loadData}/>
            <Repositories 
                repositories={repositories} 
                handleDeleteRepo={handleDeleteRepo} 
                handleNewRepo={handleNewRepo}
                handleUpdateRepo={handleUpdateRepo}
            />
        </>
    )
}