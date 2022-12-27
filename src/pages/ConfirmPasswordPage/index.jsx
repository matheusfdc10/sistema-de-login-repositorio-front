import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/auth'
import { confirmPassword } from '../../services/api'
import { StyledConfirmPassword } from './style'

export default function ConfirmPasswordPage() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [password, setPassword] = useState('')

    async function handleConfirmPassword(user, password) {
        setPassword('')
        try {
            const response = await confirmPassword(user, password)
            if (response.data.auth) {
                navigate(`/updatePassword/${response.data.token}`)
            }
        } catch(err) {
            toast.error(`${err.response.data.msg} 3`)
        }
    }

    return (
        <StyledConfirmPassword>
            <div className="form">
                <div className="field">
                    <h1 className="title">Confirme sua senha</h1>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="actions">
                    <button onClick={() => handleConfirmPassword(user, password)}>Verificar</button>
                </div>
            </div>
        </StyledConfirmPassword>
    )
}