import React from 'react';
import styled from 'styled-components';

const TemplateContainer = styled.main`
  width:100%;
  height:auto;
  padding-top:80px;
`

type TemplateProps = {
  children: React.ReactNode;
}

const SpaceInfoTemplate = ({children}:TemplateProps) => {
  return (
    <TemplateContainer>
      {children}
    </TemplateContainer>
  )
}

export default SpaceInfoTemplate;
