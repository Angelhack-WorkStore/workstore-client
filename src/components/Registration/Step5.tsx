import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {PrimaryButton} from '../Common/CustomButton';
import {PrevStep, NextStep} from '../../store/modules/registration';

const Step5 = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="FooterNav">
        <PrimaryButton onClick={() => dispatch(PrevStep(4))}>이전</PrimaryButton>
        <PrimaryButton onClick={() => dispatch(NextStep(6))}>다음</PrimaryButton>
      </div>
    </>
  )
}

export default Step5;