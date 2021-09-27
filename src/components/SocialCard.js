import MediumCard from "./styled/MediumCard";
import Account from "./styled/Account";

export default function SocialCard(){

    return (
        <MediumCard>
            <Account>
                <img src="images/icon-facebook.svg" alt="Icon"/>
                <p>@nathanf</p>
            </Account>
        </MediumCard>
    );
}