import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import { StyledLoginPage } from './style'

export const handleLogin = async (email, password, setPassword, login) => {
    setPassword('')
    login(email, password)
}

export default function LoginPage() {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <StyledLoginPage>
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="actions">
                    <button onClick={() => handleLogin(email, password, setPassword, login)}>Entrar</button>
                    <label>Não possui conta? <Link to='/register'>Crie uma!</Link></label>
                </div>
            </div>
        </StyledLoginPage>
    )
}