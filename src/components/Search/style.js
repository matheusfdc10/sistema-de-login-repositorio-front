import styled from 'styled-components'

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f1f1f1;
    max-width: 480px;
    margin: 2rem auto;
    padding: .5rem;
    box-shadow: rgb(0 0 0 / 27%) 0px 0px 15px;

    .search {
        display: flex; 
        flex-direction: row;
        gap: 5px;

        label {
            flex-shrink: 0;
        }

        input {
            flex: 1;
        }
        
    }

    .actions {
        display: flex;
        align-items: right;
        align-self: end;
        gap: 5px;
    }
`