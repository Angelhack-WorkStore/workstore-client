import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { BsCheck } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import {PrimaryButton} from '../Common/CustomButton';
import {PrevStep, NextStep, selectPriceType} from '../../store/modules/registration';
import {RootState} from '../../store/modules/index';
import * as S from './Common.style';
import PriceForm from './PriceForm';
import {registSaveAPI} from '../../store/apis/registration';


const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  .card_box {
    text-align:center;
    width:285px;
    height:279px;
    border:1px solid ${({theme}) => theme.strokeColor};
    border-radius:8px;
    cursor:pointer;
    p {
      font-size:18px;
      margin-top:54px;
      color:#8F919B;
    }
    h4 {
      margin-top:8px;
      font-size:28px;
    }
    .icon {
      font-size:80px;
      margin-top:18px;
      color:${({theme}) => theme.strokeColor}
    }
  }
  .card_box.active {
    border:3px solid ${({theme}) => theme.accentColor};
    .icon {
      color:${({theme}) => theme.accentColor};
    }
  }
`

const RefundContainer = styled.div`
  width:100%;
  height:157px;
  background:#F5F7F8;
  border-radius:8px;
  padding:32px 0 0 32px;
`

const RefundRow = styled.div`
  .left {
    display:inline-block;
    width:50%;
    font-weight:bold;
  }
  .right {
    width:50%;
  }
  & + & {
    margin-top:24px;
  }
`
const Step5 = () => {

  const registData = useSelector((state:RootState) => state.registration)
  const dispatch = useDispatch();
  const {maxUsageDay,minUsageDay,price,priceType} = registData.prices;

  const handleButtonClick = (value:string) => {
    dispatch(selectPriceType('priceType', value));
    dispatch(selectPriceType('price', 0));
  }
  
  const handleSubmitClock = () => {
    console.log(registData)
    registSaveAPI(registData).then(res => console.log(res));
    
  }

  return (
    <S.StepContainer>
      <ButtonContainer>
        <div className={`card_box ${priceType === 'DAY' && 'active'}`} onClick={() => handleButtonClick('DAY')}>
          <p>단위</p>
          <h4>하루예약</h4>
          <div className="icon">
            <BsCheck/>
          </div>
        </div>
        <div className={`card_box ${priceType === 'MONTH' && 'active'}`} onClick={() => handleButtonClick('MONTH')}>
          <p>단위</p>
          <h4>개월예약</h4>
          <div className="icon">
            <BsCheck/>
          </div>
        </div>
      </ButtonContainer>
      <PriceForm 
        priceType={priceType} 
        price={price}
        maxUsageDay={maxUsageDay}
        minUsageDay={minUsageDay}
      />
      <hr style={{marginTop:'60px'}}/>
      <h4>환불 기준 안내</h4>
      <RefundContainer>
        <RefundRow>
          <span className="left">이용 8일 전</span>
          <span className="right">총 금액의 100% 환불</span>
        </RefundRow>
        <RefundRow>
          <span className="left">이용 7일 전 ~ 이용 전일</span>
          <span className="right">총 금액의 90% 환불</span>
        </RefundRow>
        <RefundRow>
          <span className="left">이용 당일</span>
          <span className="right">환불 불가</span>
        </RefundRow>
      </RefundContainer>
      <div className="FooterNav">
        <PrimaryButton className="prev_btn" onClick={() => dispatch(PrevStep(4))}><BsArrowLeft/>&nbsp;이전</PrimaryButton>
        <PrimaryButton onClick={handleSubmitClock}>등록 완료</PrimaryButton>
      </div>
    </S.StepContainer>
  )
}

export default Step5;