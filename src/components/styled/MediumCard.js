import styled from "styled-components";

const colors = {
    facebook: 'hsl(208, 92%, 53%)',
    twitter: 'hsl(203, 89%, 53%)',
    youtube: 'hsl(348, 97%, 39%)',
    instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
}

const MediumCard = styled.div`
    cursor: pointer;
    width: 100%;
    padding-block: 2em;
    background-color: ${({theme}) => theme.cardBackground};
    text-align: center;
    /* border-top: 3px solid ${({borderTop, theme}) => borderTop || theme.cardBackground}; */
    border-image: ${({platform}) => {
        if (platform === 'instagram') return colors[platform];
        return `linear-gradient(to right, ${colors[platform]}, ${colors[platform]})`
    }};
    border-width: 3px 0 0 0;
    border-image-slice: 9;
    border-style: solid;

    &:hover {
        background-color: ${({theme}) => theme.cardBackgroundHover};
    }
`

export default MediumCard;