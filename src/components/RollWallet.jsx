import React from 'react';
import styled, { keyframes } from 'styled-components';
import Canvg from 'canvg';

import AttrList from './AttrList';

import loading from '../images/loading-noun.gif';
import { ethers } from 'ethers';

import SyntheticNoun from "../contracts/SyntheticNoun.json";
import syntheticNounAddress from "../contracts/SyntheticNoun-address.json";

import head from '../data/head.json';
import glass from '../data/glass.json';
import acsry from '../data/acsry.json';
import body from '../data/body.json';

//"0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154"

const DisplayCard = styled.div`
  display: flex;
  background: #ffffff;
  height: 290px;
  width: 250px;
  border: 1px solid white;
  margin-right: 20px;
  border: 2px solid black;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 90%;
  margin-top: 15px;
  background: #ecf0f1;
`;

const RollWrapper = styled.div`
`;

const RollButton = styled.div`
  display: flex;
  align-items: center;
  background: #d63c5e;
  border-color: #d63c5e;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-style: outset;
  &:hover {
    background: #fc42d8;
    border-color: #fc42d8;
  }
`;

const WalletWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const Dice = styled.div`
  animation-name: ${spin};
  animation-duration: ${props => props.duration}ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const DownloadPNG = styled.a`
  cursor: pointer;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 20px;
  text-decoration: underline;
`;

const body_ = new Map(body.map(i => [i.descId, i.name]));
const acsry_ = new Map(acsry.map(i => [i.descId, i.name]));
const head_ = new Map(head.map(i => [i.descId, i.name]));
const glasses_ = new Map(glass.map(i => [i.descId, i.name]));

const url = `https://eth-rinkeby.alchemyapi.io/v2/yMd6FIVYrQMh-vtHkCCuhOaEvtEef1_6`;

class RollWallet extends React.Component {

  constructor(props) {
    super(props);

    this.rollWallet = this.rollWallet.bind(this);
    this.state = {
      card: loading,
      attr: {
        head: `none`,
        body: `none`,
        acsry: `none`,
        glasses: `none`,
      },
      dice: 'gg-dice-6',
      duration: 1500,
      rollState: 'Roll Wallet',
      png: undefined,
      downloadPng: false,
    };
  }

  async rollWallet() {

    const { ethereum } = window;

    if (ethereum === undefined) {
      alert(`Metamask missing`);
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    this.setState({
      rollState: 'Rolling...',
      dice: 'gg-dice-1',
      duration: 1500,
      downloadPng: false,
    });

    this.getSeed(address);
  }

  async drawHiddenCanvas(base64Svg) {
    const decodedSvg = atob(base64Svg);

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const v = await Canvg.from(ctx, decodedSvg);
    await v.render();
    const img = canvas.toDataURL("image/png");
    this.setState({
      png: img
    });
  }


  async getSeed(wallet) {

    try {
      const provider = new ethers.providers.JsonRpcProvider(url);
      const Roll = new ethers.Contract(
        syntheticNounAddress.SyntheticNoun,
        SyntheticNoun,
        provider
      );


      this.setState({
        rollState: 'Generating Seed',
        dice: 'gg-dice-2',
      });

      const seed = await Roll.getSeed(wallet);
      console.log(seed);

      await new Promise(resolve => setTimeout(resolve, 3000));

      const attr_ = {
        head: head_.get(seed[3]),
        body: body_.get(seed[1]),
        acsry: acsry_.get(seed[2]),
        glasses: glasses_.get(seed[4])
      };

      this.setState({
        rollState: 'Generating SVG',
        dice: 'gg-dice-3',
      });

      const svg = await Roll.generateSvgImage(wallet);
      this.drawHiddenCanvas(svg);

      this.setState({
        card: `data:image/svg+xml;base64,${svg}`,
        attr: attr_,
        rollState: 'Noun Generated',
        duration: 0,
        dice: 'gg-dice-4',
        downloadPng: true
      });
    } catch(error) {
      alert(`Error connecting to alchemy, report to @12bnoun`);
    }

  }

  render() {

    const { attr, card, dice, duration, rollState, png, downloadPng } = this.state;

    return (
      <WalletWrapper>
        <DisplayCard>
          <CardImg src={card} />
          {downloadPng ? <DownloadPNG href={png} download>Download PNG</DownloadPNG>: <div></div>}
        </DisplayCard>
        <RollWrapper>
          <AttrList attr={attr}/>
          <RollButton onClick={this.rollWallet}>
            <Dice duration={duration}><i className={dice}></i></Dice> &nbsp;&nbsp;{rollState}
          </RollButton>
        </RollWrapper>
      </WalletWrapper>
    )
  }
}

export default RollWallet;
