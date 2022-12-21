import { useEffect, useState } from "react"
import { StyledSearch } from "./style"


export default function Search({ handleSearch }) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        handleSearch('')
    }, [query === ''])
    
    const handleClear = () => {
        setQuery('')
        handleSearch('')
    }


    return (
        <StyledSearch>
            <label htmlFor="query">Procurar:</label>
            <input 
                type="text" 
                name="query" 
                id="query"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={handleClear}>Limpar</button>
            <button onClick={() => handleSearch(query)}>Procurar</button>
        </StyledSearch>
    )
}