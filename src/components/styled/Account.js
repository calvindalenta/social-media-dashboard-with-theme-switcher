import styled from "styled-components";

const Account = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    p {
        font-weight: 700;
        color: ${({theme}) => theme.secondaryText};
    }
`

export default Account;