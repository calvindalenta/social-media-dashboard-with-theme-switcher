import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './components/styled/Theme';

import Container from './components/styled/Container';
import CardWrapper from './components/styled/CardWrapper';
import SocialCard from './components/SocialCard';
import OverviewCard from './components/OverviewCard';

import socialCardData from './data/socialCardData'; 
import overviewCardData from './data/overviewCardData';
import OverviewHeader from './components/styled/OverviewHeader';

function resolveSocialImage(platform){
  const socialIcon = `images/icon-${platform}.svg`
  return socialIcon;
}

function App() {

  const socialCards = socialCardData.map(data => {
    return <SocialCard
      key={data.followers * data.userName.length}
      platform={data.platform}
      socialIcon={resolveSocialImage(data.platform)}
      userName={data.userName}
      followers={data.followers}
      followerType={data.followerType}
      trend={data.trend}
    />
  });

  const overviewCards = overviewCardData.map(data => {
    return <OverviewCard
      data={data}
      socialIcon={resolveSocialImage(data.platform)}
    />
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GlobalStyle />
        <CardWrapper>
          {socialCards}
        </CardWrapper>
        <OverviewHeader>Overview - Today </OverviewHeader>
        <CardWrapper>
          {overviewCards}
        </CardWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
