import React, {useRef} from 'react';
import RegistrationTemplate from '../components/Registration/RegistrationTemplate';
import RegistrationContainer from '../containers/Registration/RegistrationContainer';

const RegistrationPage = () => {

  const stepBoxRef = useRef<any>();

  return (
    <RegistrationTemplate
      stepBoxRef={stepBoxRef}
    >
      <RegistrationContainer
        stepBoxRef={stepBoxRef}
      />
    </RegistrationTemplate>
  )
}

export default RegistrationPage;