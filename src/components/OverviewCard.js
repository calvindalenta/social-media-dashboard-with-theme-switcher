import { objectOf, number, string } from 'prop-types';

import SmallCard from './styled/SmallCard';
import SocialImage from './styled/SocialImage';
import Trend from './styled/Trend';

export default function OverviewCard({data, socialIcon}){

    const trendIcon = data.trend.type === 'up' ? "images/icon-up.svg" : "images/icon-down.svg";

    let numberText = data.number;
    if (data.number >= 10000) {
        numberText = (Math.round(data.number / 1000) + 'K');
    }
    
    return (
        <SmallCard>
            <div>
                <p>{data.type}</p>
                <h2>{numberText}</h2>
            </div>
            <div>
                <SocialImage src={socialIcon} alt="Icon"/>
                <Trend type={data.trend.type}>
                    <img src={trendIcon} alt="Trend Icon" />
                    <p>{data.trend.text}</p>
                </Trend>
            </div>
        </SmallCard>
    );
}

OverviewCard.propTypes = {
    data: objectOf(
        string.isRequired,
        string.isRequired,
        number.isRequired,
        objectOf(
            string.isRequired,
            string.isRequired,
        ).isRequired
    ).isRequired,
    socialIcon: string.isRequired,
}

OverviewCard.defaultProps = {
    data: {
        platform: 'facebook',
        type: '-',
        number: 0,
        trend: {
            type: 'up',
            text: '-'
        } 
    },
    socialIcon: "images/icon-facebook.svg"
}