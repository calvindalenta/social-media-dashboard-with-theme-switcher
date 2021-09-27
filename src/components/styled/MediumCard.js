import styled from "styled-components";

const MediumCard = styled.div`
    background-color: ${({theme}) => theme.cardBackground};
    border-top: 3px solid ${({borderTop, theme}) => borderTop || theme.cardBackground};
    text-align: center;
`

export default MediumCard;