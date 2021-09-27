import styled from "styled-components";

const DashboardHeaderText = styled.div`

    padding-block: 1em;

    @media screen and (min-width: 1024px){
        font-size: 1.2rem;
    }

    h1 {
        font-size: 1.8em;
    }

    p {
        color: ${({theme}) => theme.secondaryText};
        font-weight: 700;
        font-size: 1em;
    }
`

export default DashboardHeaderText;