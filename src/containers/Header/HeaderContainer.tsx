import React from 'react';
import styled from 'styled-components';
import HeaderUtil from '../../components/Header/HeaderUtil';

const HeaderContainer = () => {
  return (
    <HeaderBlock>
      <HeaderUtil/>
    </HeaderBlock>
  )
}

export default HeaderContainer;


const HeaderBlock = styled.header`
  width:100%;
  height:72px;
  border-bottom:1px solid rgba(0,0,0,.1);
`