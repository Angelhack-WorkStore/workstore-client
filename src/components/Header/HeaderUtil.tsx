import React from 'react';
import styled from 'styled-components';

const UtilContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:1200px;
  height:100%;
  margin:0 auto;
  h3 {
    font-size:33px;
    font-weight:bold;
    cursor:pointer;
  }
`

const HeaderUtil = () => {
  return (
    <UtilContainer>
      <h3>workstore</h3>
      <div>호스트로그인</div>
    </UtilContainer>

  )
}

export default HeaderUtil;