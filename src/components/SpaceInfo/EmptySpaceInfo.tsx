import React from 'react';
import styled from 'styled-components';


const InfoContainer = styled.section`
  width:1200px;
  height:968px;
  padding-bottom:260px;
  margin:0 auto;
  text-align:center;
  h2 {
    margin-bottom:80px;
  }
  hr {
    border-color:rgba(0,0,0,.1);
  }
`
const EmptySpaceInfo = () => {
  
  
  return (
    <>
    <InfoContainer>
      <h2>공간정보 관리</h2>
      <hr/>
    </InfoContainer>
    </>
  )
}

export default EmptySpaceInfo;