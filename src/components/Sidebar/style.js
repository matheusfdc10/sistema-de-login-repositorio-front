import styled from 'styled-components'

export const StyledSidebar = styled.div`
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 300px;
    right: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    box-shadow: black 0px 0px 10px;

    > svg {
        position: fixed;
        right: 0px;
        width: 34px;
        height: 34px;
        margin-top: 12px;
        margin-right: 20px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`

export const StyledContent = styled.div`
    margin-top: 60px;
`