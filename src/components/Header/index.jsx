import { useState } from "react"
import { StyledHeader } from "./style"
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

export default function Header({ handleLogout, nameUser}) {
    const [sidebar, setSidebar] = useState(false)
    
    return (
        <StyledHeader>
            {/* <h1 className="user">Olá, {nameUser.split(' ')[0]}</h1> */}
            <h1 className="user">Meu App</h1>
            <h2>Olá, {nameUser.split(' ')[0]}</h2>
            <FaBars onClick={() => setSidebar(!sidebar)} />
            {
                sidebar && 
                    <Sidebar   
                        active={setSidebar}
                        handleLogout={handleLogout}
                    />
            }
            {/* <button onClick={handleLogout}>Sair</button> */}
        </StyledHeader>
    )
}