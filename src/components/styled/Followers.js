import styled from "styled-components";

const Followers = styled.div`
    padding-block: 2em;

    h1 {
        font-size: 4em;
    }

    p {
        color: ${({theme}) => theme.secondaryText};
        font-size: 0.9em;
        letter-spacing: 0.4em;
        text-transform: uppercase;
    }
`

export default Followers;