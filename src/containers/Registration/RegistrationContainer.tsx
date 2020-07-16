import React, {useMemo} from 'react';
import {Step1, Step2, Step3, Step4, Step5, Step6} from '../../components/Registration';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/index';

const RegistrationContainer = () => {

  const {step} = useSelector((state:RootState) => state.registration); 

  const contents = useMemo(() => {
    switch (step) {
      case 'step2':
        return <Step2/>
      case 'step3':
        return <Step3/>
      case 'step4':
        return <Step4/>
      case 'step5':
        return <Step5/>
      case 'step6':
        return <Step6/>
      default:
        return <Step1/>
        
    }
    
  },[step])
  
  return (
    <>
      {contents}
    </>
  )
}

export default RegistrationContainer;