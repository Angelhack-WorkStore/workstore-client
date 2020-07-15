import React,{useState, useMemo} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/index';



const TemplateConatiner = styled.main`
  width:100%;
  height:100%;
  .top_container {
    display:flex;
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
  .box {
    position:sticky;
    top:80px;
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
`
const BodyContainer = styled.div`
  width:calc(100% - 638px);
  height:calc(100vh - 79px);
  overflow-y:scroll;
`
const ContentBlock = styled.div`
  width:590px;
  margin:120px auto 281px;
`

type ProgressProps = {
  width:string,
}
type TemplateProps = {
  children:React.ReactNode;
}

const RegistrationTemplate = ({children}:TemplateProps) => {
  const [width, setWidth] = useState('25%');
  const {step} = useSelector((state:RootState) => state.registration )


  const header = useMemo(() => {
    if(step === 'step1') {
      setWidth('20%');
      return (
        <div className="box">
          <h5>STEP 01</h5>
          <h2>공간 정보를<br/> 입력해주세요</h2>
          <p>호스트 등록을 위해 공유하실 공간에 대한<br/> 기본 정보를 알려주세요!</p>
        </div>
      )
    } else if(step === 'step2') {
      setWidth('40%');
      return (
        <div className="box">
          <h5>STEP 02</h5>
          <h2>세부 정보를<br/> 추가해주세요</h2>
          <p>호스트 등록을 위해 공유하실 공간에 대한<br/> 기본 정보를 알려주세요!</p>
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
        </DescriptBlock>
        <BodyContainer>
          <ContentBlock>
            {children}
          </ContentBlock>
        </BodyContainer>
      </div>
    </TemplateConatiner>
  )
}

export default RegistrationTemplate;