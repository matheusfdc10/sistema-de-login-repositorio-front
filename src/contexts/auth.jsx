import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api, createSession } from '../services/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if(user){
            setUser(JSON.parse(user))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }

        setLoading(false)
    }, [])

    async function login(email, password) {
        try {
            const response = await createSession(email, password)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', response.data.token)
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            setUser(response.data.user)
            navigate('/')
            const name = response.data.user.name.split(' ')[0]
            toast.success(`Seja bem vindo(a) ${name}!`)
        } catch(err) {
            toast.error(err.response.data.msg)
        }
    }

    function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/login')
        toast.success('Sessão finalizada!')
    }

    return (
        <AuthContext.Provider 
            value={
                {
                    authenticated: Boolean(user),
                    user,
                    loading,
                    login,
                    logout
                }
            }>
            {children}
        </AuthContext.Provider>
    );
}