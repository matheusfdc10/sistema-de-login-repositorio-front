import { FaHome, FaRegSun, FaTimes } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarItem from "../SidebarItem";
import { StyledContent, StyledSidebar } from "./style";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ setSidebar, handleLogout }) {
  const navigate = useNavigate();

  const confirmaPasswordPage = () => {
    navigate("/confirmPassword");
    setSidebar(false);
  };

  const homePage = () => {
    navigate("/home");
    setSidebar(false);
  };

  return (
    <StyledSidebar sidebar={setSidebar}>
      <FaTimes onClick={() => setSidebar(false)} />
      <StyledContent>
        <SidebarItem Icon={FaHome} text="Início" action={homePage} />
        <SidebarItem
          Icon={FaRegSun}
          text="Alterar senha"
          action={confirmaPasswordPage}
        />
        <SidebarItem Icon={BiLogOut} text="Sair" action={handleLogout} />
      </StyledContent>
    </StyledSidebar>
  );
}
