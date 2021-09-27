import styled from "styled-components";

const DarkMode = styled.div`
    padding-block: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    
    p {
        color: ${({theme}) => theme.secondaryText};
        font-weight: 700;
        font-size: 1em;
    }
`

export default DarkMode;