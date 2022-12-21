import styled from 'styled-components'

export const StyledRpositories = styled.div`
    max-width: 480px;
    margin: 1rem auto;

    .title {
        font-size: 1.3rem;
        text-align: center;
    }

    .list {
        list-style: none;
        margin: 0;
        padding: 0;

        .item {
            display: flex;
            align-items: center;
            background-color: #f1f1f1;
            border-bottom: 1px solid #d5d5d5;
            padding: .5rem;
            gap: 5px;

            :last-child{
                border-bottom: none;
            }

            > img {
                width: 53px;
                border: 1px solid #d5d5d5;
            }

            .info {
                flex: 1;

                .name {
                    font-size: 1.5rem;
                }
            }
        }
    }
    
    .new {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #f1f1f1;
        max-width: 480px;
        margin: 2rem auto;
        padding: .5rem;

        .insertRepo {
            display: flex; 
            flex-direction: row;
            gap: 5px;

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
    }

    label {
        flex-shrink: 0;
    }

    input {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: black;
    }
`