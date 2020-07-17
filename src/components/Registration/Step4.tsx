import React from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as S from './Common.style';
import {PrimaryButton} from '../Common/CustomButton';
import {PrevStep, NextStep, putManageInfo} from '../../store/modules/registration';
import {CheckBox} from '../Common/CustomCheckBox'
import {RootState} from '../../store/modules/index';
import { BsArrowLeft } from "react-icons/bs";

const DayContainer = styled.div`
  position:relative;
  width:100%;
  height:auto;
  .day_header {
    display:flex;
    justify-content:space-between;
    h5 {
      font-size:15px;
      color:${({theme}) => theme.boldColor};
    }
    .checkbox_container {
      display:flex;
      margin-bottom:29px;
    }
  }
  .dropdown {
    width:283px;
    height:48px;
    margin-bottom:24px;
    .text {
      position:relative;
      top:3px;
    }
    .icon {
      top:1em;
    }
  }
  .center_mark {
    font-size: 15px;
    margin:0 5px;
    font-weight:bold;
  }
  .none_box_left {
    position:absolute;
    z-index:11;
    width:283px;
    height:48px;
    background:#E3E6E8;
    border-radius:8px;
    opacity:.7;
  }
  .none_box_right {
    position:absolute;
    z-index:11;
    left:302px;
    width:283px;
    height:48px;
    background:#E3E6E8;
    border-radius:8px;
    opacity:.7;
  }
`

const Step4 = () => {
  const {manageInfo} = useSelector((state:RootState) => state.registration)
  const dispatch = useDispatch();

  const dayOfWeeks = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  const EngdayOfWeeks = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']
  const times = ['09시','10시','11시','12시','13시','14시','15시','16시','17시','18시','19시','20시','21시','22시'];
  const options = times.map(time => {
    return {
      key: time,
      text: time,
      value: time
    }
  })
  const handleInputsChange = (event:any, name:string, index:number,type?:string) => {
    const dayOfWeek = EngdayOfWeeks[index];
    const {manageType,endTime,startTime} = manageInfo[index] 
    if(type) {
      if(manageType === type) {
        dispatch(putManageInfo(name, dayOfWeek, ''));
      } else {
        dispatch(putManageInfo(name, dayOfWeek, type));
      }
    } else {
      let value = event.target.querySelector('span').innerHTML;
      value = value.substr(0,2) + ':00:00';
      if(name === 'startTime' && parseInt(value) < parseInt(endTime)) {
        dispatch(putManageInfo(name, dayOfWeek, value));
      } else if(name === 'endTime' && parseInt(startTime) < parseInt(value))
        dispatch(putManageInfo(name, dayOfWeek, value));
    }
  }
  return (
    <S.StepContainer>
      <h3>이용 가능 시간</h3>
      <h4>요일별 이용시간 설정</h4>
      <hr/>
      {
        manageInfo.map((data,index) => {
          return (
            <DayContainer key={dayOfWeeks[index]}>
              <div className="day_header" >
                <h5>{dayOfWeeks[index]}</h5>
                <div className="checkbox_container">
                  <CheckBox>
                    <input onChange={(event:any) => handleInputsChange(event, 'manageType', index, 'ALLTIME')} 
                      type="checkbox" 
                      id={`alltime${index}`} 
                      name={data.dayOfWeek}
                      checked={data.manageType === 'ALLTIME'}
                    />
                    <label htmlFor={`alltime${index}`}>24시 운영</label>
                  </CheckBox>
                  <CheckBox>
                    <input onChange={(event:any) => handleInputsChange(event, 'manageType', index, 'HOLIDAY')} 
                      type="checkbox" 
                      id={`holiday${index}`} 
                      name={data.dayOfWeek}
                      checked={data.manageType === 'HOLIDAY'}
                    />
                    <label htmlFor={`holiday${index}`}>휴무일</label>
                  </CheckBox>
                </div>
              </div>
              {
                data.manageType === 'ALLTIME' || data.manageType === 'HOLIDAY' ?
                  <>
                    <div className="none_box_left"></div>
                    <div className="none_box_right"></div>
                  </>
                :
                  null
              }
              <Dropdown
                className="dropdown"
                placeholder='Compact'
                compact
                selection
                options={options}
                value={data.startTime.substr(0,2) + '시'}
                onChange={(event:any) => handleInputsChange(event,'startTime',index)}
              />
              <span className="center_mark">~</span>
              <Dropdown
                className="dropdown"
                placeholder='Compact'
                compact
                selection
                options={options}
                value={data.endTime.substr(0,2) + '시'}
                onChange={(event:any) => handleInputsChange(event,'endTime',index)}
              />
              <div></div>
              <hr/>
            </DayContainer>
          )
        })
      }
      <div className="FooterNav">
        <PrimaryButton className="prev_btn" onClick={() => dispatch(PrevStep(3))}><BsArrowLeft/>&nbsp;이전</PrimaryButton>
        <PrimaryButton onClick={() => dispatch(NextStep(5))}>다음</PrimaryButton>
      </div>
    </S.StepContainer>
  )
}

export default Step4;