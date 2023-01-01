import { useContext } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Header handleLogout={logout} nameUser={user.name} />
      <Outlet />
    </>
  );
}
