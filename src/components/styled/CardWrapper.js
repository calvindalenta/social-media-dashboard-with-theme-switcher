import styled from "styled-components";

const CardWrapper = styled.div`
    display: grid;
    gap: 1.5em;

    padding-block: 2em;

    @media screen and (min-width: 600px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export default CardWrapper;