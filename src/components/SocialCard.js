import { objectOf, number, string } from 'prop-types';

import MediumCard from "./styled/MediumCard";
import Account from "./styled/Account";
import Followers from "./styled/Followers";
import Trend from "./styled/Trend";

export default function SocialCard({socialIcon, userName, followers, trend}){

    const trendIcon = trend.type === 'up' ? "images/icon-up.svg" : "images/icon-down.svg"

    return (
        <MediumCard>
            <Account>
                <img src={socialIcon} alt="Icon"/>
                <p>{userName}</p>
            </Account>
            <Followers>
                <h1>{followers}</h1>
                <p>Followers</p>
            </Followers>
            <Trend>
                <img src={trendIcon} alt="Trend Icon" />
                <p>{trend.text}</p>
            </Trend>
        </MediumCard>
    );
}

SocialCard.propTypes = {
    socialIcon: string.isRequired,
    userName: string.isRequired,
    followers: number.isRequired,
    trend: objectOf(
        string.isRequired,
        string.isRequired
    ).isRequired
}

SocialCard.defaultProps = {
    socialIcon: 'images/icon-facebook.svg',
    userName: '-',
    followers: 0,
    trend: {
        type: 'up',
        text: '-'
    }
}