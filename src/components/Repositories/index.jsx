import { useState } from "react";
import { StyledRpositories } from "./style";

export default function Repositories({
  repositories,
  handleDeleteRepo,
  handleNewRepo,
  handleUpdateRepo,
}) {
  const [newRepo, setNewRepo] = useState("");
  const [updateRepo, setUpdateRepo] = useState([]);
  const [updateRepoField, setUpdateRepoField] = useState(false);

  function onNewRepo() {
    handleNewRepo(newRepo)
    setNewRepo("")
  }

  function fieldUpdateRepo(repository) {
    setNewRepo(repository.url)
    setUpdateRepo(repository)
    setUpdateRepoField(true)
  }
  
  async function onUpdateRepo() {
    const response = await handleUpdateRepo(updateRepo, newRepo)
    if(!response) return null
    setUpdateRepoField(false)
    setNewRepo("")
  }

  function cancelUpdateRepo () {
    setUpdateRepoField(false)
    setNewRepo("")
  }
  
  return (
    <StyledRpositories>
      {
        !updateRepoField ?
          <div className="new">
            <div className="insertRepo">
              <label htmlFor="new-repo">Novo Repo:</label>
              <input
                type="url"
                name="new-repo"
                id="new-repo"
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
              />
            </div>
            <div className="actions">
              <button onClick={() => setNewRepo('')}>Limpar</button>
              <button onClick={() => onNewRepo()}>Adiconar</button>
            </div>
          </div>
        :
          <div className="new">
            <div className="insertRepo">
              <label htmlFor="new-repo">Atualizar Repo:</label>
              <input
                type="url"
                name="new-repo"
                id="new-repo"
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
              />
            </div>
            <div className="actions">
              <button onClick={() => setNewRepo('')}>Limpar</button>
              <button onClick={() => cancelUpdateRepo()}>Cancelar</button>
              <button onClick={() => onUpdateRepo()}>Atualizar</button>
            </div>
          </div>
      }
      <h2 className="title">Repositórios</h2>
      <ul className="list">
        {repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <img src={`https://github.com/${repository.name.split('/')[0]}.png`} alt="img" />
            <div className="info">
              <a href={repository.url}>
                <div className="owner">{repository.name.split('/')[0]}</div>
                <div className="name">{repository.name.split('/')[1]}</div>
              </a>
            </div>
            <button onClick={() => fieldUpdateRepo(repository)}>Atualizar</button>
            <button onClick={() => handleDeleteRepo(repository)}>Excluir</button>
          </li>
        ))}
      </ul>
    </StyledRpositories>
  );
}
