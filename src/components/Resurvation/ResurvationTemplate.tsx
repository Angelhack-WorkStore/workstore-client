import React from 'react';
import styled from 'styled-components';
import Footer from '../../containers/Footer/FooterContainer';

const TemplateContainer = styled.main`
  width:1200px;
  padding-top:80px;
  margin:0 auto;

`

type TemplateType = {
  children: React.ReactNode;
}

const ResurvationTemplate = ({children}:TemplateType) => {
  return (
    <>
    <TemplateContainer>
      {children}
    </TemplateContainer>
    <Footer/>
    </>
  )
}

export default ResurvationTemplate;