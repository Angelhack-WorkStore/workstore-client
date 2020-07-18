import React from 'react';
import styled from 'styled-components';
import {Input} from '../Common/CustomInput';
import {CountInput, LeftButton, RightButton} from './Step3';
import {useDispatch} from 'react-redux';
import {selectPriceType ,termChange} from '../../store/modules/registration';

const SettingBlock = styled.div`
  position:relative;
  margin-top:60px;
  .price {
    display:flex;
    align-items:center;
  }
  .won {
    position:absolute;
    left:155px;
  }
  .flex_box {
    display:flex;
  }
  .margin_box {
    margin-right:122px;
  }
`
const CustomInput = styled(Input)`
  width:183px;
  height:48px;  
  margin-right:16px;
  text-align:right;
  padding-right:32px;
`

type FormProps = {
  priceType:string,
  price:any,
  minUsageDay:number,
  maxUsageDay:number,
}
const PriceForm = ({priceType, price, minUsageDay, maxUsageDay}:FormProps) => {

  const dispatch = useDispatch();


  const handlePriceChange = (event:any) => {
    const {id, value} = event.target;
    dispatch(selectPriceType(id, value));
  }
  const handlePriceClick = (name:string, value:number) => {

    if(name === 'minUsageDay' && value === 1 && maxUsageDay > minUsageDay) {
      dispatch(termChange(name, value));
    } else if(name === 'minUsageDay' && value === -1 && minUsageDay > 1){
      dispatch(termChange(name, value));
    } else if (name === 'maxUsageDay' && value === 1 && maxUsageDay <30) {
      dispatch(termChange(name, value));
    } else if(name === 'maxUsageDay' && value === -1 && minUsageDay < maxUsageDay) {
      dispatch(termChange(name, value));
    }
  }


  return (
    <>
      {priceType === 'DAY' ?
        <SettingBlock>
        <h3>하루예약 설정</h3>
        <h4>기본 가격</h4>
        <div className="price">
          <span className="won">원</span>
          <CustomInput 
            type="number"
            id="price"
            onChange={(event:any) => handlePriceChange(event)}
            value={price.amount}
          /> /1일 당
        </div>
        <div className="flex_box">
          <div className="margin_box">
            <h4>최소 예약일 선택</h4>
            <CountInput>
              <LeftButton onClick={() => handlePriceClick('minUsageDay',-1)}>-</LeftButton>
                <span>{minUsageDay}일</span>
              <RightButton onClick={() => handlePriceClick('minUsageDay',1)}>+</RightButton>
            </CountInput>
          </div>
          <div>
            <h4>최대 예약일 선택</h4>
            <CountInput>
              <LeftButton onClick={() => handlePriceClick('maxUsageDay',-1)}>-</LeftButton>
                <span>{maxUsageDay}일</span>
              <RightButton onClick={() => handlePriceClick('maxUsageDay',1)}>+</RightButton>
            </CountInput>
          </div>
        </div>
      </SettingBlock>
    :
      <SettingBlock>
        <h3>개월예약 설정</h3>
        <h4>기본 가격</h4>
        <div className="price">
          <span className="won">원</span>
          <CustomInput 
            type="number"
            id="price"
            onChange={(event:any) => handlePriceChange(event)}
            value={price.amount}
          /> /1개월 당
        </div>
        </SettingBlock>
    }
  </>
  )
}

export default PriceForm;