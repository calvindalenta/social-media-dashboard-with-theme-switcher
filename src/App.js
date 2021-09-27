import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './components/styled/Theme';

import Container from './components/styled/Container';
import CardWrapper from './components/styled/CardWrapper';
import SocialCard from './components/SocialCard';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GlobalStyle />
        <CardWrapper>
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </CardWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
