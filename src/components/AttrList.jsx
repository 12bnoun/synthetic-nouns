import React from 'react';
import styled from 'styled-components';

const Attr = styled.div`
  background: #ffffff;
  height: 100px;
  width: 100px;
  border: 1px solid white;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
`;

const AttrWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const AttrHead = styled.div`
  display: flex;
  height: 20%;
  font-size: 11px;
  width: 70px;
  background: #5929f9;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  margin-left: 5px;
  color: white;
`;

const AttrBody = styled.div`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

function AttrList({ attr }) {

  const { head, body, glasses, acsry } = attr;
  return (
      <>
      <AttrWrapper>
        <Attr>
          <AttrHead>Head</AttrHead>
          <AttrBody>{head}</AttrBody>
        </Attr>
        <Attr>
          <AttrHead>Glasses</AttrHead>
          <AttrBody>{glasses}</AttrBody>
        </Attr>
      </AttrWrapper>
      <AttrWrapper>
        <Attr>
          <AttrHead>Body</AttrHead>
          <AttrBody>{body}</AttrBody>
        </Attr>
        <Attr>
          <AttrHead>Acsry</AttrHead>
          <AttrBody>{acsry}</AttrBody>
        </Attr>
      </AttrWrapper>
      </>
  );
}

export default AttrList;
