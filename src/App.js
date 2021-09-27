import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './components/styled/Theme';

import Container from './components/styled/Container';
import CardWrapper from './components/styled/CardWrapper';
import SocialCard from './components/SocialCard';

import socialCardData from './data/socialCardData'; 

function App() {

  const socialCards = socialCardData.map(data => {
    const socialIcon = `images/icon-${data.platform}.svg`
    return <SocialCard
      key={data.followers * data.userName.length}
      platform={data.platform}
      socialIcon={socialIcon}
      userName={data.userName}
      followers={data.followers}
      followerType={data.followerType}
      trend={data.trend}
    />
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GlobalStyle />
        <CardWrapper>
          {socialCards}
        </CardWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
