import React from 'react';
import styled from 'styled-components';

import logo from '../images/1500x500-nouns.png';
import synt from '../images/synt-update.png';


const Information = styled.div`
  font-size: 21px;
  width: 80vw;
  margin: 20px auto;
  margin-bottom: 50px;
`;

const LogoImg = styled.img`
  height: 30px;

  @media (max-width: 768px) {
    height: 25px;
  }
`;

const LogoSynt = styled.img`
  height: 35px;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Canvas = styled.canvas`
  visibility: hidden;
  display: none;
`;

class Description extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Information>
          <Logo>
            <LogoSynt src={synt} />
            <LogoImg src={logo} />
          </Logo>
          <br/>
          <div>Synthetic Nouns are virtual Noun pfp uniquely generated on-chain for every wallet.</div>
          <br/>
          <div>Wallet address acts as a seed to Nouns trait generator contract by NounsDAO. Thus, synthetic Noun combinations generated are unique to the wallet owner.</div>
          <br/>
          <div>Are you a shark? A pizza? or lipstick? Time to find out.</div>
        </Information>
        <Canvas width="700" height="700">
        </Canvas>
      </div>
    )
  }
}

export default Description;
