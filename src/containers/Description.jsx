import React from 'react';
import styled from 'styled-components';

import logo from '../images/1500x500-nouns.png';
import synt from '../images/synt-update.png';


const Information = styled.div`
  font-size: 21px;
  width: 80vw;
  margin: 20px auto;
  margin-bottom: 50px;
  line-height: 1.3;
`;

const LogoImg = styled.img`
  height: 34px;

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
          <div>&nbsp;&nbsp;&nbsp;&nbsp;Nouns are pseudo-randomly generated using the previous block hash as the seed to determine traits. Synthetic Nouns are pseudo-randomly generated using your Ethereum wallet address as the seed. Each wallet can only generate one Synthetic Noun, and there are over five million combinations.</div>
          <br/>
          <div>Are you a Shark, Pizza, or Lipstick? "Roll wallet" to find out.</div>
        </Information>
        <Canvas width="700" height="700">
        </Canvas>
      </div>
    )
  }
}

export default Description;
