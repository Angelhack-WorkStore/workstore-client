import React from 'react';
import RegistrationTemplate from '../components/Registration/RegistrationTemplate';
import RegistrationContainer from '../containers/Registration/RegistrationContainer';

const RegistrationPage = () => {
  return (
    <RegistrationTemplate>
      <RegistrationContainer/>
    </RegistrationTemplate>
  )
}

export default RegistrationPage;