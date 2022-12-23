import styled from 'styled-components'

export const StyledSidebarItem = styled.div`
    display: flex;
    background-color: #e1e1e1;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    flex-direction: row-reverse;

    > svg {
        margin: 0 20px;
    }

    &:hover {
        background-color: white;
    }
`