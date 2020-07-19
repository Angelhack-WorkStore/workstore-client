import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Banner from '../../components/Main/Banner';
import {SubButton, PrimaryButton} from '../../components/Common/CustomButton'
import main1 from '../../lib/main1.png';
import main2 from '../../lib/main2.png';
import main3 from '../../lib/main3.png';
import main4 from '../../lib/main4.png';
import Footer from '../Footer/FooterContainer';
import storage from '../../store/storageHoc';
import Dialog from '../../components/Common/Dialog';
import {ACCESS_TOKEN} from '../../store/Contants';
import {device } from "../../styles/MediaHoc";
const MiddleContainer = styled.div`
  width:100%;
  height:328px;
  padding-top:90px;
  text-align:center;
  background:${({theme}) => theme.grayColor1};
  h2 {
    font-size:44px;
    color:${({theme}) => theme.boldColor};
  }
  p {
    font-size:16px;
    margin-top:32px;
    line-height:24px;
  }
`
const BottomContainer = styled.div`
  width:100%;
  text-align:center;
  .content_block {
    text-align:center;
    padding-top:90px;
    width:1200px;
    margin:0 auto;
    @media ${device.laptopL} {
      width:100%;
    }
  }
  h2 {
    font-size:44px;
  }
  .flex_box {
    position:relative;
    display:flex;
    justify-content:space-between;
    height:369px;
    text-align:left;
    margin-top:60px;
    .number {
      display: inline-block;
      text-align: center;
      justify-content:center;
      align-items:cetner;
      width:35px;
      height:35px;
      background:${({theme}) => theme.accentColor};
      border-radius:50%;
      color:white;
    }
    img {
      position:absolute;
      bottom:0;
    }
    .margin {
      margin-left:20px;
    }
    div {
      width:386px;
    }
    
    h3 {
      font-size:26px;
    }
    p {
      margin-top:24px;
      font-size:16px;
      line-height:27px;
    }
    @media ${device.laptopL} {
      display:block;
      text-align:center;
      height:auto;
      div {
        width:100%;
      }
      img {
        position:relative;
      }
    }
  }
  .bottom_banner {
    position:relative;
    width:100%;
    text-align:left;
    padding:80px 0 0 80px;
    margin-top:90px;
    color:white;
    .bot_banner {
      position:absolute;
      border-radius:20px;
      top: 0;
      left:0;
      z-index: -1;
      width:100%;
    }
  }
`
const MainContainer = () => {


  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const token = storage.get(ACCESS_TOKEN);

  const handleButtonClick = () => {
    if(token) {
      history.push('/registration')
    } else {
      setVisible(true);
    }
  }

  const handleConfirmClick = () => {
    history.push('/auth/login');
  }

  const handleCancelClick = () => {
    setVisible(false);
  }


  return (
    <>
      <Banner/>
      <MiddleContainer>
        <h2>워크스토어 써야하는 이유</h2>
        <p>
          워크스토어는 점포가 운영 되지 않는 시간에 공간을 대여하여 수익을 냅니다.<br/>
          사무업무를 목적으로한 이용자를 연결하여 공간의 무분별한 사용을 최소화하고<br/>
          안전하게 호스팅할 수 있도록 해줍니다. 예약 가능일, 이용 시간, 요금,<br/> 
          수용 인원은 전적으로 호스트가 결정합니다.
        </p>
      </MiddleContainer>
      <BottomContainer>
        <div className="content_block">
          <h2>쉽고 간단한 워크스토어 이용 3단계</h2>
          <div className="flex_box">
            <div>
              <h3><span className="number">1</span> 무료로 공간 등록하기</h3>
              <p>점포의 좌석수, 편의시설, 다양한 형태의 공간을 무료<br/> 로 등록하고 공유하세요.</p>
              <img src={main1} alt="image"/>
            </div>
            <div className="margin">
              <h3><span className="number">2</span> 공간 예약 설정하기</h3>
              <p>
                예약할 수 있는 날짜, 이용 요금, 이용 시간 등<br/>
                공간 사용 요건에 대해 순서대로 정보를 입력하시면<br/>
                됩니다.
              </p>
              <img src={main2} alt="image"/>
            </div>
            <div className="margin">
              <h3><span className="number">3</span> 무인점포로 부가수익 올리기</h3>
              <p>
                공간이 게시되면 사용 조건에 부합하는 이용자<br/>
                가 예약을 합니다. QR코드를 통한 출입관리로 언제든지<br/>
                무인으로 점포를 운영할 수 있습니다.
              </p>
              <img src={main3} alt="image"/>
            </div>
          </div>
          <SubButton width={'285px'}>자세한 이용 방법 알아보기</SubButton>
          <div className="bottom_banner">
            <h2>잠자는 공간으로<br/> 부가 수익을 올릴 준비<br/> 되셨나요?</h2>
            <PrimaryButton onClick={handleButtonClick} width={'285px'}>공간 등록하러 가기</PrimaryButton>
            <img className="bot_banner" src={main4} alt="image"/>
          </div>
        </div>
      </BottomContainer>
      <Footer/>
      <Dialog
        title="로그인이 필요합니다."
        cancelText="취소"
        confirmtext="확인"
        visible={visible}
        onConfirm={handleConfirmClick}
        onCancel={handleCancelClick}
      >
        로그인하러 가시겠습니까?
      </Dialog>
    </>
  )
}

export default MainContainer;