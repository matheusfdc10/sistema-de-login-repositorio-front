import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createSession, getUser} from '../services/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()  => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    async function login(email, password) {
        try {
            const response = await createSession(email, password)
            localStorage.setItem('token', response.data.token)
            const name = await loadUser()
            toast.success(`Seja bem vindo(a) ${name}!`)
        } catch(err) {
            logout()
            toast.error(err.response.data.msg)
        }
    }
    
    const loadUser = async () => {
        try{
            const response = await getUser()
            setUser(response.data)
            navigate('/home')
            setLoading(false)

            const name = response.data.name.split(' ')[0]
            return name
        } catch(err) {
            logout()
            toast.error(err.response.data.msg)
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem('token')
            setUser(null)
            navigate('/login')
        } catch(err) {
            toast.error(err.response.data.msg)
        }
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