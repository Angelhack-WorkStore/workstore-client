import React from 'react';
import SpaceInfoTemplate from '../components/SpaceInfo/SpaceInfoTemplate'; 
import SpaceInfoContainer from '../containers/SpaceInfo/SpaceInfoContainer';

const SpaceInfoPage = () => {

  return (
    <SpaceInfoTemplate>
      <SpaceInfoContainer/>
    </SpaceInfoTemplate>
  )
}

export default SpaceInfoPage;