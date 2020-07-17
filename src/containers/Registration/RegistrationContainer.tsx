import React, {useEffect,useRef,useMemo} from 'react';
import {Step1, Step2, Step3, Step4, Step5} from '../../components/Registration';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/index';


type ConProps = {
  stepBoxRef:any,
}
const RegistrationContainer = ({stepBoxRef}:ConProps) => {

  const {step} = useSelector((state:RootState) => state.registration); 

  useEffect(() => {
    if(stepBoxRef.current)
      stepBoxRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  },[step])

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