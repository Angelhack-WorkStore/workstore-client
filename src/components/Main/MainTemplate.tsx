import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.main`
  position:relative;
  width:100%;
  height:100%;
  padding-bottom:480px;
`

type TemplateType = {
  children: React.ReactNode;
}
const MainTemplate = ({children}:TemplateType) => {


  return (
    <MainContainer>
      {children}
    </MainContainer>

  )
}

export default MainTemplate;