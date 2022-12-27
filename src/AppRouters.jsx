import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/auth';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ConfirmPasswordPage from './pages/ConfirmPasswordPage';
import UpdatePasswordPage from './pages/UpdatePassword';

export default function AppRoutes() {

    function Private({ children }) {
        const { authenticated, loading} = useContext(AuthContext)
        
        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to='/login' />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route 
                        path='/login' 
                        element={<LoginPage />} 
                    />
                    <Route 
                        path='/register' 
                        element={<RegisterPage />} 
                    />
                    <Route 
                        path='/' 
                        element={
                            <Private>
                                <MainPage />
                            </Private>
                        } 
                    />
                    <Route 
                        path='/confirmPassword' 
                        element={
                            <Private>
                                <ConfirmPasswordPage />
                            </Private>
                        } 
                    />
                    <Route 
                        path='/updatePassword/:token' 
                        element={
                            <Private>
                                <UpdatePasswordPage />
                            </Private>
                        } 
                    />
                </Routes>   
            </AuthProvider>
        </Router>
    )
}