import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './components/styled/Theme';

import Container from './components/styled/Container';
import CardWrapper from './components/styled/CardWrapper';
import SocialCard from './components/SocialCard';
import OverviewCard from './components/OverviewCard';

import socialCardData from './data/socialCardData'; 
import overviewCardData from './data/overviewCardData';

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

  const overviewCards = overviewCardData.map(data => {
    const socialIcon = `images/icon-${data.platform}.svg`
    return <OverviewCard
      data={data}
      socialIcon={socialIcon}
    />
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GlobalStyle />
        <CardWrapper>
          {socialCards}
        </CardWrapper>
        <CardWrapper>
          {overviewCards}
        </CardWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
