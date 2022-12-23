import { useEffect, useState } from "react"
import { StyledSearch } from "./style"

const handleSearch = (user, setRepositories, setLoading, query, loadData) => {
    loadData(user, setRepositories, setLoading, query)
}

export default function Search({ user, setRepositories, setLoading, loadData}) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        handleSearch(user, setRepositories, setLoading, query, loadData)
    }, [user, setLoading, loadData, query, setRepositories])

    return (
        <StyledSearch>
            <div className="search">
                <label htmlFor="query">Procurar:</label>
                <input 
                    type="text" 
                    name="query" 
                    id="query"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
            <div className="actions">
                <button onClick={() => setQuery('')}>Limpar</button>
                {/* <button onClick={() => handleSearch(user, setRepositories, setLoading, query, loadData)}>Procurar</button> */}
            </div>
        </StyledSearch>
    )
}