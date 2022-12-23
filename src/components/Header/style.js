import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: #f1f1f1;
    border-bottom: 1px solid #d5d5d5;
    padding: .5rem;

    .user {
        font-size: 2rem;
        margin: 0;

        @media (max-width: 400px){
            flex: 1;
        }
    }

    > h2 {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
        margin-left: 15px;
        padding-left: 15px;
        margin-top: 13px;

        @media (max-width: 400px){
            display: none;
        }
    }

    > button {
        font-size: 1.3rem;
    }

    > svg {
        /* position: fixed; */
        /* color: white; */
        width: 30px;
        height: 30px;
        /* margin-top: 32px; */
        margin-right: 16px;
        cursor: pointer;
    }
`