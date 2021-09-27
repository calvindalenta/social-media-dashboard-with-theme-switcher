import styled from "styled-components";

const SmallCard = styled.div`
    background-color: ${({theme}) => theme.cardBackground};
    padding: 1.5em;
    display: flex;
    justify-content: space-around;

    & > * {
        flex: auto;
        /* border: 1px solid white; */
    }

    &:hover {
        background-color: ${({theme}) => theme.cardBackgroundHover};
    }

    & > div:first-child {
        text-align: left;
        /* background-color: red; */

        p {
            font-weight: 700;
            font-size: 1.2em;
            color: ${({theme}) => theme.secondaryText}
        }

        h2 {
            font-size: 2em;
            padding-top: 0.5em;
        }
    }

    & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
`

export default SmallCard;