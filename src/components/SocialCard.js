import { objectOf, number, string } from 'prop-types';

import MediumCard from "./styled/MediumCard";
import Account from "./styled/Account";
import Followers from "./styled/Followers";
import Trend from "./styled/Trend";
import SocialImage from './styled/SocialImage';
import { appendIfBigger } from '../utils';

export default function SocialCard({platform, socialIcon, userName, followers, followerType, trend}){

    const trendIcon = trend.type === 'up' ? "images/icon-up.svg" : "images/icon-down.svg";
    
    let followersText = appendIfBigger(followers);
    
    return (
        <MediumCard platform={platform}>
            <Account>
                <SocialImage src={socialIcon} alt="Icon"/>
                <p>{userName}</p>
            </Account>
            <Followers>
                <h1>{followersText}</h1>
                <p>{followerType}</p>
            </Followers>
            <Trend type={trend.type}>
                <img src={trendIcon} alt="Trend Icon" />
                <p>{trend.text}</p>
            </Trend>
        </MediumCard>
    );
}

SocialCard.propTypes = {
    platform: string.isRequired,
    socialIcon: string.isRequired,
    userName: string.isRequired,
    followers: number.isRequired,
    followerType: string.isRequired,
    trend: objectOf(
        string.isRequired,
        string.isRequired
    ).isRequired
}

SocialCard.defaultProps = {
    platform: 'facebook',
    socialIcon: 'images/icon-facebook.svg',
    userName: '-',
    followers: 0,
    followerType: 'Followers',
    trend: {
        type: 'up',
        text: '-'
    }
}