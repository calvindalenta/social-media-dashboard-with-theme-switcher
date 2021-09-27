import SmallCard from './styled/SmallCard';
import Trend from './styled/Trend';

export default function OverviewCard(){

    return (
        <SmallCard>
            <div>
                <p>Likes</p>
                <h2>87</h2>
            </div>
            <div>
                <img src="images/icon-youtube.svg" alt="Icon"/>
                <Trend type={'up'}>
                    <img src="images/icon-up.svg" alt="Trend Icon" />
                    <p>3%</p>
                </Trend>
            </div>
        </SmallCard>
    );
}