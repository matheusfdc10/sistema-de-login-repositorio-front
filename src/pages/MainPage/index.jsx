import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Repositories from '../../components/Repositories'
import Search from '../../components/Search'
import { AuthContext } from '../../contexts/auth'
import { createRepository, destroyRepository, getRepositories } from '../../services/api'
import './style.css'

export default function MainPage() {
    const { user, logout } = useContext(AuthContext)
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ loadingError, setLoadingError ] = useState(false)

    const loadData = async (query = '') => {
        try{
            const response = await getRepositories(user?.id, query)
            setRepositories(response.data)
            setLoading(false)
        } catch(err) {
            console.log(err)
            setLoadingError(true)
        }
    }

    useEffect(() => {
        (async () => loadData())();
    }, [])

    const handleLogout = () => {
        logout()
    }

    const handleSearch = (query) => {
        loadData(query)
    }

    const handleDeleteRepo = async (repository) => {

        await destroyRepository(user?.id, repository._id)
        await loadData()
    }

    const handleNewRepo = async (url) => {
        try {
            await createRepository(user?.id, url)
            await loadData()
        } catch(err) {
            console.log(err)
            setLoadingError(true)
        }
    }

    if (loadingError) {
        return (
            <div className="loading">
                Erro ao carregar dados do repositório. <Link to="login">Voltar</Link>
            </div>
        ) 
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
            <Nav handleLogout={handleLogout} nameUser={user.name}/>
            <Search handleSearch={handleSearch}/>
            <Repositories 
                repositories={repositories} 
                handleDeleteRepo={handleDeleteRepo} 
                handleNewRepo={handleNewRepo}
            />
        </>
    )
}