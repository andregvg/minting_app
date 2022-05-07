import { NavContainer, Icon } from './../styles/globalStyles';
import { socialRoutes } from './socialRoutes';

export const socialNav = () => {
    return (
        <NavContainer>
            <a target="_blank"
                href={socialRoutes.opensea.link}>
                <Icon src={socialRoutes.opensea.image} title="OpenSea"
                    className='social opensea' />
            </a>

            <a target="_blank"
                href={socialRoutes.twitter.link}>
                <Icon src={socialRoutes.twitter.image} title="Twitter"
                    className='social twitter' />
            </a>

            {/* <a target="_blank"
                href={socialRoutes.discord.link}>
                <Icon src={socialRoutes.discord.image} title="Discord"
                    className='social discord' />
            </a> */}

            <a target="_blank"
                href={socialRoutes.instagram.link}>
                <Icon src={socialRoutes.instagram.image} title="Instagram"
                    className='social instagram' />
            </a>

            {/* <a target="_blank"
                href={socialRoutes.ethereum.link}>
                <Icon src={socialRoutes.ethereum.image} title="Etherscan"
                    className='social ethereum' />
            </a> */}

            <a target="_blank"
                href={socialRoutes.github.link}>
                <Icon src={socialRoutes.github.image} title="GitHub"
                    className='social github' />
            </a>
        </NavContainer>
    )
};