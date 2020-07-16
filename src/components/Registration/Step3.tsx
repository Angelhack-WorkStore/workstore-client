import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {PrimaryButton} from '../Common/CustomButton';
import {PrevStep, NextStep} from '../../store/modules/registration';
import NoticeForm from './NoticeForm';
import * as S from './Common.style';

const Step3 = () => {

  const dispatch = useDispatch();

  return (
    <S.StepContainer>
      <h3 className="second_header">유의사항 및 편의시설</h3>
      <h4>예약 시 유의 사항</h4>
      <p>최대 10개까지 등록 가능합니다.</p>
      <NoticeForm/>
      <h4>편의 시설</h4>
      <p>구비된 편의시설을 선택해 주세요</p>
      <div className="FooterNav">
        <PrimaryButton onClick={() => dispatch(PrevStep(2))}>이전</PrimaryButton>
        <PrimaryButton onClick={() => dispatch(NextStep(4))}>다음</PrimaryButton>
      </div>
    </S.StepContainer>
  )
}

export default Step3;