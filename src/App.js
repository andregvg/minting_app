import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import * as so from "./components/socialNav";
import * as b from "./components/btnOpensea";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...${input.substring(input.length - len + 1)}` : input;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    FREE_MINT: 0,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong. Please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `YES! ${CONFIG.NFT_NAME} is yours! Go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container mh={"95vh"} pa={"30px 10%"} image={CONFIG.SHOW_BACKGROUND ? null : null} >

        <s.Logo alt={"Buddy Alien logo"} src={"/config/images/logo.png"} />
        <s.SpaceNormal />

        <s.TextHighlight fs={"2em"}>{data.totalSupply} / {CONFIG.MAX_SUPPLY} minted</s.TextHighlight>
        <s.SpaceMedium />

        <s.SubTitle>
          Buddy Alien is a collection of 10,000 ERC721 unique handmade aliens living on the blockchain.
          They came from different parts of the Milky Way and beyond, affected by humans revolution of web3.
        </s.SubTitle>
        <s.SpaceMedium />

        <s.ResponsiveWrapper>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <s.Container jc={"start"} pa={"20px"}>
                <s.TextHighlight>Sold Out</s.TextHighlight>
                <b.btnOpensea />
              </s.Container>
            </>
          ) : (
            <>
              <s.Container bg={"var(--background-optin)"} jc={"center"} pa={"var(--spacing-medium)"} br={"var(--rouded-normal)"}>
                <s.TextHighlight>1 free {CONFIG.NFT_NAME}</s.TextHighlight>
                <s.SpaceMedium />
                {blockchain.account === "" || blockchain.smartContract === null ? (
                  <>
                    <s.Description>
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.Description>
                    <s.SpaceMedium />
                    <s.Btn onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}>
                      connect
                    </s.Btn>
                    {blockchain.errorMsg !== "" ?
                      (<>
                        <s.SpaceMedium /><s.Description>{blockchain.errorMsg}</s.Description>
                      </>) : null}
                  </>
                ) : (
                  <>
                    <s.Description>{truncate(blockchain.account, 5)}</s.Description>
                    <s.SpaceNormal />
                    <s.NavContainer>
                      <s.Btn
                        pa={"10px 11px"} br={"100%"}
                        style={{ lineHeight: 0.5 }}
                        className={"shadow-box"}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </s.Btn>
                      <s.SpaceNormal />
                      <s.Description>{mintAmount}</s.Description>
                      <s.SpaceNormal />
                      <s.Btn
                        pa={"10px"} br={"100%"}
                        style={{ lineHeight: 0.5 }}
                        className={"shadow-box"}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}>
                        +
                      </s.Btn>
                    </s.NavContainer>
                    <s.SpaceNormal />
                    
                    <s.Description>
                      Price: {Number(data.totalSupply) >= CONFIG.FREE_MINT ? CONFIG.DISPLAY_COST * mintAmount : "FREE"}
                    </s.Description>
                    <s.SpaceMedium />
                    <s.Btn
                      className={"shadow-box"}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "MINTING..." : "MINT"}
                    </s.Btn>
                    <s.Description>
                      {feedback}
                    </s.Description>
                  </>
                )}
              </s.Container>
            </>
          )}
          <s.SpaceMedium />
          <s.Container jc={"center"}>
            <s.PreeviewColection alt={"Preview collection"} src={"/config/images/aliens.gif"} />
          </s.Container>



        </s.ResponsiveWrapper>

        <s.SpaceMedium />
        <s.SubTitle>Buddy up with Alien</s.SubTitle>
        <s.SpaceSmall />
        <so.socialNav />
      </s.Container >

      <s.Banner bp={"center"} image={CONFIG.SHOW_BACKGROUND ? "/config/images/foobar.png" : null}></s.Banner>

    </s.Screen >
  );
}

export default App;
