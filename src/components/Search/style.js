import styled from 'styled-components'

export const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #f1f1f1;
    max-width: 480px;
    margin: 2rem auto;
    padding: .5rem;
    
    label {
        flex-shrink: 0;
    }

    input {
        width: 100%;
    }
`