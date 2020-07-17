import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position:absolute;
  bottom:0;
  width:100%;
  height:260px;
  background:#F5F7F8;
`

const ContentBlock = styled.div`
  width:1200px;
  margin:50px auto 0;
  p {
    font-size:15px;
  }
  hr {
    height:1px;
    border:none;
    background:${({theme}) => theme.strokeColor};
    margin:32px 0;
  }
  .logo {
    font-weight:bold;
  }
`
const FooterContainer = () => {
  return (
    <Container>
      <ContentBlock>
        <p>서비스 메뉴얼 다운로드 &gt;</p>
        <hr/>
        <p className="logo">Workstore</p>
      </ContentBlock>
    </Container>
  )
}

export default FooterContainer;