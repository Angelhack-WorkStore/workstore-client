import React, {useMemo} from 'react';
import {Step1, Step2, Step3} from '../../components/Registration';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/index';

const RegistrationContainer = () => {

  const {step} = useSelector((state:RootState) => state.registration); 

  const contents = useMemo(() => {
    if(step === 'step1') {
      return <Step1/>
    } else {
      return <Step2/>
    }
  },[step])
  
  return (
    <>
      {contents}
    </>
  )
}

export default RegistrationContainer;