import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './components/styled/Theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <h2>Hi!</h2>
    </ThemeProvider>
  );
}

export default App;
