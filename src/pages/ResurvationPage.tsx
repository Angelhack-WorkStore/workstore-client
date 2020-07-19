import React from 'react';
import ResurvationTemplate from '../components/Resurvation/ResurvationTemplate';
import ResurvationContainer from '../containers/Resurvation/ResurvationContainer';
import styled from 'styled-components';


const Block = styled.div`
  width:100%;
  position:relative;
  padding-bottom:422px;
`
const ResurvationPage = () => {
  return (
    <Block>
      <ResurvationTemplate>
        <ResurvationContainer/>
      </ResurvationTemplate>
    </Block>
  )
}

export default ResurvationPage;