import { useState } from "react"
import { StyledHeader } from "./style"
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import { useNavigate } from "react-router-dom"

export default function Header({ handleLogout, nameUser}) {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false)
    
    return (
        <StyledHeader>
            <h1 onClick={() => navigate('/home')} className="user">Meu App</h1>
            <div className="line"/>
            <h2>Olá, {nameUser.split(' ')[0]}</h2>
            <FaBars onClick={() => setSidebar(!sidebar)} />
            {
                sidebar && 
                    <Sidebar   
                        setSidebar={setSidebar}
                        handleLogout={handleLogout}
                    />
            }
        </StyledHeader>
    )
}