import styled from 'styled-components'

export const StyledNav = styled.div`
    display: flex;
    align-items: center;
    background-color: #f1f1f1;
    border-bottom: 1px solid #d5d5d5;
    padding: .5rem;

    .user {
        flex: 1;
        font-size: 2rem;
        margin: 0;
    }

    > button {
        font-size: 1.3rem;
    }
`