import { StyledNav } from "./style"

export default function Nav({ handleLogout, nameUser}) {
    
    return (
        <StyledNav>
                <h1 className="user">Olá, {nameUser.split(' ')[0]}</h1>
                <button onClick={handleLogout}>Sair</button>
        </StyledNav>
    )
}