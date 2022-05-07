import styled from "styled-components";

export const Screen = styled.div`
  background-color: var(--background);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ ai }) => (ai ? ai : "center")};
  justify-content: ${({ jc }) => (jc ? jc : "start")};
  max-width: ${({ Mw }) => (Mw ? Mw : "100%")};
  min-height: ${({ mh }) => (mh ? mh : "0")};
  padding: ${({ pa }) => (pa ? pa : "0")};
  background-color: ${({ bg }) => (bg ? bg : "none")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-position: ${({ bp }) => (bp ? bp : "left")};
  border-radius: ${({ br }) => (br ? br : "0")};
  background-size: cover;
`;
export const ResponsiveWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  
  @media (min-width: 800px) {
    flex-direction: row;
`;
export const Logo = styled.img`
  width: 300px;
  transition: width 0.5s;
  transition: height 0.5s;

  @media (min-width: 800px) {
    width: 500px;
  }
`;
export const SubTitle = styled.p`
  color: var(--text-subtitle);
  font-size: 1.3em;
  line-height: 1.5em;
  text-align: justify;
  @media (min-width: 800px) {
    font-size: 1.5em;
  }
  @media (min-width: 1080px) {
    font-size: 1.8em;
  }
  `;

export const Description = styled.p`
  color: ${({ color }) => (color ? color : "var(--text-description)")};
  font-size: ${({ fs }) => (fs ? fs : "1em")};
  text-transform: uppercase;
  text-align: center;
`;

export const TextHighlight = styled.p`
  color: ${({ color }) => (color ? color : "var(--text-highlight)")};
  font-size: ${({ fs }) => (fs ? fs : "1.8em")};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const Btn = styled.div`
  padding: ${({ pa }) => (pa ? pa : "15px 30px")};
  background: var(--button);
  color: var(--text-button);
  text-align:center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  border-radius: ${({ br }) => (br ? br : "50px")};
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
   user-select: none;
  `;

export const PreeviewColection = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border-radius: 100%;
  min-width: 150px;
  max-width: 180px;
  @media (min-width: 800px) {
    max-width: 250px;
  }
  @media (min-width: 1080px) {
    max-width: 350px;
  }
  transition: width 0.5s;
`;

// Used for providing space between components
export const SpaceSmall = styled.div`
  height: var(--spacing-small);
  width: var(--spacing-small);
`;
export const SpaceNormal = styled.div`
  height: var(--spacing-normal);
  width: var(--spacing-normal);
`;
export const SpaceMedium = styled.div`
  height: var(--spacing-medium);
  width: var(--spacing-medium);
`;
export const SpaceLarge = styled.div`
  height: var(--spacing-large);
  width: var(--spacing-large);
`;















export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;



export const OpenSeaLink = styled.a`
  display: flex;
  color: var(--text-button);
  align-items: center;
  justify-content: center;
  text-transform: none;
  text-decoration: none;
  `;

export const Icon = styled.img`
  display: flex;  
  width: 30px;
  @media (min-width: 800px) {
    width: 40px;
  }
`;

export const Banner = styled.div`
    width: 100%;
    min-height: 60px;
    background-image: ${({ image }) => (image ? `url(${image})` : "none")};
    background-position: ${({ bp }) => (bp ? bp : "left")};
    background-size: cover;
  `;











export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;
export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`

`;
