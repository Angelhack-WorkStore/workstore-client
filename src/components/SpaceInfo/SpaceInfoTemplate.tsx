import React from 'react';
import styled from 'styled-components';
import EmptyDiv from './EmptySpaceInfo';
import FooterContainer from '../../containers/Footer/FooterContainer';

const TemplateContainer = styled.main`
  position:relative;
  width:100%;
  height:auto;
  padding-top:80px;
  padding-bottom:260px;
`
const InfoContainer = styled.section`
  width:1200px;
  margin:0 auto;
  text-align:center;
  h2 {
    margin-bottom:80px;
  }
  hr {
    border-color:rgba(0,0,0,.1);
  }
`
type TemplateProps = {
  children: React.ReactNode;
}

const SpaceInfoTemplate = ({children}:TemplateProps) => {
  return (
    <TemplateContainer>
      <InfoContainer>
        <h2>공간정보 관리</h2>
        <hr/>
        <EmptyDiv/>
      </InfoContainer>
      {children}
      <FooterContainer/>
    </TemplateContainer>
  )
}

export default SpaceInfoTemplate;
