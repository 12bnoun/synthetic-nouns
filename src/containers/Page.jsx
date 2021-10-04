import React from 'react';
import styled from 'styled-components';

import RollWallet from '../components/RollWallet';
import Description from '../containers/Description';
import Banner from '../containers/Banner';

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Description />
        <RollWallet />
        <Banner />
      </div>
    )
  }
}

export default Page;
