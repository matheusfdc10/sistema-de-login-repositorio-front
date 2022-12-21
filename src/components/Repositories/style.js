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

            :last-child{
                border-bottom: none;
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
        align-items: center;
        gap: 5px;
        background-color: #f1f1f1;
        max-width: 480px;
        margin: 2rem auto;
        padding: .5rem;
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