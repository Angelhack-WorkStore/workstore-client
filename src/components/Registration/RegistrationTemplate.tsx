import React,{useState, useMemo} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/index';
import {device} from '../../styles/MediaHoc'


const TemplateConatiner = styled.main`
  width:100%;
  height:100%;
  .top_container {
    display:flex;
    @media ${device.laptopL} {
      display:block;
    }
    
  }
`
const ProgressBar = styled.div<ProgressProps>`
  position:relative;
  width:100%;
  height:6px;
  background:#F5F7F8;
  .active_bar {
    position:absolute;
    width:${props => props.width};
    height:6px;
    background:${({theme}) => theme.accentColor};
    transition:.3s;
  }
`
const DescriptBlock = styled.div`
  width:638px;
  height:auto;
  padding:80px 0 0 10%;
  text-align:left;
  background:${({theme}) => theme.sideBackColor};
  hr {
    display:none;
    border:none;
    height:1px;
    background:${({theme}) => theme.strokeColor};
    margin-top:30px;
  }
  .box {
    span {
      color:#8F919B;
    }
  }
  h5 {
    font-weight:bold;
    font-size:15px;
    color:${({theme}) => theme.accentColor};
  }
  h2 {
    margin:8px 0 24px;
    font-size:40px;
  }
  p {
    font-size:16px;
    line-height: 24px;
  }
  @media ${device.laptopL} {
    width:100%;
    text-align:center;
    background-color:white;
    padding-left:0;
    hr {
      display:block;
    }
  }
`
const BodyContainer = styled.div`
  position:relative;
  width:calc(100% - 638px);
  height:calc(100vh - 79px);
  overflow-y:scroll;
  @media ${device.laptopL} {
    width:100%;
    overflow-y:unset;
  }
`
const ContentBlock = styled.div`
  width:590px;
  min-height:calc(100vh - 198px);
  margin:120px auto 281px;
`

type ProgressProps = {
  width:string,
}
type TemplateProps = {
  children:React.ReactNode;
  stepBoxRef:any,
}

const RegistrationTemplate = ({children,stepBoxRef}:TemplateProps) => {
  const [width, setWidth] = useState('25%');
  const {step} = useSelector((state:RootState) => state.registration )


  const header = useMemo(() => {
    if(step === 'step1') {
      setWidth('20%');
      return (
        <div className="box">
          <h5>STEP 01<span> - STEP 06</span></h5>
          <h2>공간 정보를<br/> 입력해주세요</h2>
          <p>호스트 등록을 위해 공유하실 공간에 대한<br/> 기본 정보를 알려주세요!</p>
        </div>
      )
    } else if(step === 'step2') {
      setWidth('40%');
      return (
        <div className="box">
          <h5>STEP 02<span> - STEP 06</span></h5>
          <h2>사진과 글로<br/> 공간을 소개해주세요</h2>
          <p>공간에 대해 자세히 설명할 수록<br/> 고객들의 예약률이 높아져요!</p>
        </div>
      )
    } else if(step === 'step3') {
      setWidth('60%');
      return (
        <div className="box">
          <h5>STEP 03<span> - STEP 06</span></h5>
          <h2>세부정보를<br/> 추가해주세요</h2>
          <p>시설정보와 유의사항을 설정해주세요!</p>
        </div>
      )
    } else if(step === 'step4') {
      setWidth('80%');
      return (
        <div className="box">
          <h5>STEP 04<span> - STEP 06</span></h5>
          <h2>이용정보를<br/> 입력해볼까요?</h2>
          <p>고객이 공간을 이용할 시간을 설정해주세요!</p>
        </div>
      )
    } else if(step === 'step5') {
      setWidth('100%');
      return (
        <div className="box">
          <h5>STEP 05<span> - STEP 06</span></h5>
          <h2>마지막이에요!<br/>운영하실 예약 단위를<br/>선택해주세요</h2>
          <p>예약을 하루 단위로 받으실 건지, 개월 단위로 받으실 건지<br/> 아니면 둘 다 받으실 건지 선택해주세요!</p>
        </div>
      )
    }
  },[step])

  return (
    <TemplateConatiner>
      <ProgressBar width={width}>
        <div className="active_bar"/>
      </ProgressBar>
      <div className="top_container">
        <DescriptBlock>
          {header}
        <hr/>
        </DescriptBlock>
        <BodyContainer ref={stepBoxRef}>
          <ContentBlock>
            {children}
          </ContentBlock>
        </BodyContainer>
      </div>
    </TemplateConatiner>
  )
}

export default RegistrationTemplate;