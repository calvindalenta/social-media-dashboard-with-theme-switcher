import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.mainText};
        font-size: 14px;
        font-family: 'Inter', sans-serif;
    }

    img {
        max-width: 100%;
    }
`

export default globalStyles;