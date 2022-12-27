import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api, createSession, userValid } from '../services/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()  => {
        realodPage()

    }, [navigate, user])

    async function login(email, password) {
        try {
            const response = await createSession(email, password)
            localStorage.setItem('user', response.data.user.email)
            localStorage.setItem('token', response.data.token)
            api.defaults.headers.Authorization = `Bearer ${response.data.token} ${response.data.user.email}`
            setUser(response.data.user)
            navigate('/')

            const name = response.data.user.name.split(' ')[0]
            toast.success(`Seja bem vindo(a) ${name}!`)
        } catch(err) {
            toast.error(`${err.response.data.msg} 1`)
        }
    }

    const realodPage = async () => {
        const email = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if(email && token && !user){
            await userValid(token, email)
                .then(user => user.data)
                .then(user => {
                    setUser(user)
                    api.defaults.headers.Authorization = `Bearer ${token} ${email}`
                    navigate('/')
                    setLoading(false)
                })
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