import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmPassword } from "../../services/api";
import { StyledConfirmPassword } from "./style";

export default function ConfirmPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  async function handleConfirmPassword(password) {
    setPassword("");
    try {
      const response = await confirmPassword(password);
      if (response.data.auth) {
        navigate(`/updatePassword/${response.data.token}`);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button onClick={() => handleConfirmPassword(password)}>
            Verificar
          </button>
        </div>
      </div>
    </StyledConfirmPassword>
  );
}
