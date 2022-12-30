import { useState } from "react"
import { StyledHeader } from "./style"
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import { Link } from "react-router-dom"

export default function Header({ handleLogout, nameUser}) {
    const [sidebar, setSidebar] = useState(false)
    
    return (
        <StyledHeader>
            <Link to='/home'><h1 className="user">Meu App</h1></Link>
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