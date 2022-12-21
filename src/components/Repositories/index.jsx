import { useState } from "react";
import { StyledRpositories } from "./style";

export default function Repositories({
  repositories,
  handleDeleteRepo,
  handleNewRepo,
}) {
  const [newRepo, setNewRepo] = useState("");

  function onNewRepo() {
    handleNewRepo(newRepo)
    setNewRepo("")
  }
  
  return (
    <StyledRpositories>
      <h2 className="title">Repositórios</h2>
      <ul className="list">
        {repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <div className="info">
              <a href={repository.url}>
                <div className="owner">{repository.name.split('/')[0]}</div>
                <div className="name">{repository.name.split('/')[1]}</div>
              </a>
            </div>
            <button onClick={() => handleDeleteRepo(repository)}>Excluir</button>
          </li>
        ))}
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repo:</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button onClick={onNewRepo}>Adiconar</button>
      </div>
    </StyledRpositories>
  );
}
