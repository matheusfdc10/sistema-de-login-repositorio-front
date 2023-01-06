import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: #f1f1f1;
    border-bottom: 1px solid #d5d5d5;
    padding: .5rem;
    box-shadow: rgb(0 0 0 / 27%) 0px 0px 15px;

    > a {
        text-decoration: none;
        color: black;

        @media (max-width: 400px){
            flex: 1;
        }

        .user {
            font-size: 2rem;
            margin: 0;
        }
    }

    .line {
        border: 1px solid;
        height: 40px;

        margin: 0 15px;
        @media (max-width: 400px){
            display: none;
        }
    }

    > h2 {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
        margin-top: 13px;

        @media (max-width: 400px){
            display: none;
        }
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