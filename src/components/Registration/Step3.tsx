import React from 'react';
import styled,{css} from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {PrimaryButton} from '../Common/CustomButton';
import {CheckBox} from '../Common/CustomCheckBox';
import {PrevStep, NextStep, putSeatType, maxPersonnel, minPersonnel, seatCounter} from '../../store/modules/registration';
import NoticeForm from './NoticeForm';
import AmenityForm from './AmenityForm';
import {RootState} from '../../store/modules/index';
import * as S from './Common.style';
import { BsArrowLeft } from "react-icons/bs";

export const CountInput = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:183px;
  height:48px;
  border:1px solid #E3E6E8;
  border-radius:8px;
  span {
    font-size:15px;
  }
`
const FlexBox = styled.div`
  display:flex;
  .cnt_box {
    margin-left:20px;
  }
`
const buttonCss = css`
  width:48px;
  height:48px;
  color:#585B67;
  font-size:24px;
  background:#ECEFF1;
  margin:0; 
`

export const LeftButton = styled(PrimaryButton)`
  ${buttonCss}
  border-top-right-radius:0;
  border-bottom-right-radius:0;
`
export const RightButton = styled(PrimaryButton)`
  ${buttonCss}
  border-top-left-radius:0;
  border-bottom-left-radius:0;
`

const Step3 = () => {

  const {seatInfo} = useSelector((state:RootState) => state.registration);
  const dispatch = useDispatch();

  const {maxPersonnelCount,minPersonnelCount,seatCount,seatType} = seatInfo

  const handleCheckChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {id} = event.currentTarget;
    dispatch(putSeatType('seatType',id));
  }

  const handleMaxCountClick = (num:number) => {
    if(num === 1 && seatCount > maxPersonnelCount) {
      dispatch(maxPersonnel(num))
    } else if (num === -1 && minPersonnelCount < maxPersonnelCount) {
      dispatch(maxPersonnel(num))
    }
  }

  const handleMinCountClick = (num:number) => {
    if(num === 1 && maxPersonnelCount > minPersonnelCount) {
      dispatch(minPersonnel(num))
    } else if (num === -1 && minPersonnelCount > 0) {
      dispatch(minPersonnel(num))
    }
  }

  const handleSeatCountClick = (num:number) => {
    if(num === 1 && seatCount < 30) {
      dispatch(seatCounter(num))
    } else if (num === -1 && seatCount > 1) {
      dispatch(seatCounter(num))
    }
    if(num === -1 && maxPersonnelCount === seatCount && seatCount !== 1) {
      if(maxPersonnelCount === minPersonnelCount) {
        dispatch(minPersonnel(-1))
      }
      dispatch(maxPersonnel(-1))
    }
  }

  return (
    <S.StepContainer>
      <h3>시설 정보</h3>
      <h4>좌성 종류</h4>
      <CheckBox>
        <input id="FIX" type="checkbox" name="seat" onChange={handleCheckChange} checked={seatType==='FIX'}/>
        <label htmlFor="FIX">고정석</label>
      </CheckBox>
      <CheckBox>
        <input id="FREE" type="checkbox" name="seat" onChange={handleCheckChange} checked={seatType==='FREE'}/>
        <label htmlFor="FREE">자유석</label>
      </CheckBox>
      <h4>좌석 수</h4>
      <CountInput>
        <LeftButton onClick={() => handleSeatCountClick(-1)}>-</LeftButton>
          <span>{seatCount}개</span>
        <RightButton onClick={() => handleSeatCountClick(1)}>+</RightButton>
      </CountInput>
      <FlexBox className="flex_box">
        <div>
          <h4>예약 가능 최소인원</h4>
          <CountInput>
            <LeftButton onClick={() => handleMinCountClick(-1)}>-</LeftButton>
              <span>{minPersonnelCount}명</span>
            <RightButton onClick={() => handleMinCountClick(1)}>+</RightButton>
          </CountInput>
        </div>
        <div className="cnt_box">
          <h4>예약 가능 최대인원</h4>
          <CountInput>
            <LeftButton onClick={() => handleMaxCountClick(-1)}>-</LeftButton>
              <span>{maxPersonnelCount}명</span>
            <RightButton onClick={() => handleMaxCountClick(1)}>+</RightButton>
          </CountInput>
        </div>
      </FlexBox>
      <h4>편의 시설</h4>
      <p>구비된 편의시설을 선택해 주세요</p>
      <AmenityForm/>
      <h3 className="second_header">유의사항 및 편의시설</h3>
      <h4>예약 시 유의 사항</h4>
      <p>최대 10개까지 등록 가능합니다.</p>
      <NoticeForm/>
      <div className="FooterNav">
        <PrimaryButton className="prev_btn" onClick={() => dispatch(PrevStep(2))}><BsArrowLeft/>&nbsp;이전</PrimaryButton>
        <PrimaryButton onClick={() => dispatch(NextStep(4))}>다음</PrimaryButton>
      </div>
    </S.StepContainer>
  )
}

export default Step3;