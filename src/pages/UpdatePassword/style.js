import Styled from 'styled-components'

export const StyledUpdatePassword = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 2rem;

    .form {
        background-color: #f1f1f1;
        border-radius: 5px;
        width: 100%;
        max-width: 480px;
        padding: .5rem;

        .field {

            .title{
                margin: 0;
                margin-bottom: 10px;
                text-align: center;
            }

            > input {
                width: 100%;
            }

            .password {
                margin-bottom: 10px;
            }
        }

        .actions {
            text-align: center;
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`