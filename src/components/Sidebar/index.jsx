import { FaHome, FaRegSun, FaTimes } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import SidebarItem from '../SidebarItem'
import { StyledContent, StyledSidebar } from './style'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ active, handleLogout }) {
    const navigate = useNavigate()
    
    return (
        <StyledSidebar sidebar={active}>
            <FaTimes onClick={() => active(false)} />
            <StyledContent>
                <SidebarItem Icon={FaHome} text="Início" />
                <SidebarItem Icon={FaRegSun} text="Alterar senha" action={navigate} path={'/confirmPassword'}/>
                <SidebarItem Icon={BiLogOut} text="Sair" action={handleLogout}/>
            </StyledContent>
        </StyledSidebar>
    )
}