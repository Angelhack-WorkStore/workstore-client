import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {PrimaryButton} from '../Common/CustomButton';
import {PrevStep, NextStep} from '../../store/modules/registration';

const Step6 = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="FooterNav">
        <PrimaryButton onClick={() => dispatch(PrevStep(5))}>이전</PrimaryButton>
      </div>
    </>
  )
}

export default Step6;