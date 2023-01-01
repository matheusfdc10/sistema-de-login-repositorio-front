import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { newPassword } from "../../services/api";
import { StyledUpdatePassword } from "./style";

export default function UpdatePasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");

  async function handleNewPassword(password, confirmPassword, token) {
    try {
      const response = await newPassword(password, confirmPassword, token);
      navigate("/home");
      toast.success(response.data.msg);
    } catch (err) {
      if (err.response.data.error) {
        navigate("/confirmPassword");
      }
      toast.error(err.response.data.msg);
    }
  }

  return (
    <StyledUpdatePassword>
      <div className="form">
        <div className="field">
          <h1 className="title">Alterar senha</h1>
          <input
            className="password"
            placeholder="Senha nova"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirmar senha"
            type="password"
            name="ConfirmPassword"
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setComfirmPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button
            onClick={() => handleNewPassword(password, confirmPassword, token)}
          >
            Alterar
          </button>
        </div>
      </div>
    </StyledUpdatePassword>
  );
}
