import React from 'react';
import styled from 'styled-components';

const BannerText = styled.div`
  font-size: 21px;
  width: 80vw;
  margin: 40px auto;
  display: flex;
  align-items: center;
`;

const Github = styled.a`
  margin-left: auto;
`;

class Banner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BannerText>Made with 💜 by&nbsp;
        <a href="https://twitter.com/12bnoun" target="_blank">@12bnoun</a>&nbsp;&nbsp;
        <a className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=What%20noun%20are%20you%3F%20Time%20to%20find%20out."
          data-size="large">
        </a>
        <Github href="https://github.com/12bnoun/synthetic-nouns" target="_blank">Github</Github>
        </BannerText>
      </div>
    )
  }
}

export default Banner;
