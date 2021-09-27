import styled from "styled-components";

const DarkMode = styled.div`
    padding-block: 1em;
    
    p {
        color: ${({theme}) => theme.secondaryText};
        font-weight: 700;
        font-size: 1em;
    }
`

export default DarkMode;