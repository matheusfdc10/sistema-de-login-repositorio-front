import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import { createUser } from '../../services/api'
import { StyledRegister } from './style'
import {  toast } from 'react-toastify';

export default function RegisterPage() {
    const { login } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async () => {
        if(password !== confirmPassword){
            return toast.warning('Senhas não conferem')
        }

        try {
            const response = await createUser(name, email, password)
            
            if(response){
                await login(email, password)
                toast.success('Conta criada com sucesso!')
            }
            
        } catch(err) {
            toast.error(err.response.data.msg)
        }
            
    }

    return(
        <StyledRegister>
            <h1 className="title">Cadastro</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

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

                <div className="field">
                    <label htmlFor="confirmPassword">Confirmar senha:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="actions">
                    <button onClick={handleRegister}>Cadastrar</button>
                    <label><Link to='/login'>Fazer login!</Link></label>
                </div>
            </div>
        </StyledRegister>
    )
}