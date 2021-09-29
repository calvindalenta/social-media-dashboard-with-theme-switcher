import styled from "styled-components";

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
    padding-block: 2em;
`

export default CardWrapper;