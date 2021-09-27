import styled from "styled-components";

const Trend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;

    p {
        font-weight: 700;
        color: ${({type}) => type === 'up' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
    }
`

export default Trend;