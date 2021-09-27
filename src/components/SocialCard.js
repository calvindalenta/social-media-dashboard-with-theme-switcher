import MediumCard from "./styled/MediumCard";
import Account from "./styled/Account";
import Followers from "./styled/Followers";

export default function SocialCard(){

    return (
        <MediumCard>
            <Account>
                <img src="images/icon-facebook.svg" alt="Icon"/>
                <p>@nathanf</p>
            </Account>
            <Followers>
                <h1>1987</h1>
                <p>Followers</p>
            </Followers>
        </MediumCard>
    );
}