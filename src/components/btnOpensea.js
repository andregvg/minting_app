import { Icon, Btn, OpenSeaLink } from './../styles/globalStyles';
import { socialRoutes } from './socialRoutes';

export const btnOpensea = () => {
    return (
        <Btn style={{padding: "5px", "min-width": "100%"}}>
            <OpenSeaLink target="_blank" href={socialRoutes.opensea.link} title="Buy on OpenSea">
                Buy on OpenSea
                <Icon src={socialRoutes.opensea.image} style={{ width: "30px", "margin-left": "10px" }} />
            </OpenSeaLink>
        </Btn>
    );
};