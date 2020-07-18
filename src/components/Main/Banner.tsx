import React,{useState} from 'react';
import styled from 'styled-components';
import {PrimaryButton} from '../Common/CustomButton';
import mainBanner from '../../lib/mainBanner.png';
import {useHistory} from 'react-router-dom';
import Dialog from '../Common/Dialog';
import storage from '../../store/storageHoc';
import {ACCESS_TOKEN} from '../../store/Contants';

const BannerContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  width:100%;
  height:600px;
  overflow:hidden;
  .banner {
    position:absolute;
    display:block;
    height:100%;
    z-index:-1;
  }
  .content_box {
    margin:0 0 0 151px;
    color:white;
    h3 {
      font-size:48px;
      font-weight:bold;
    }
    p {
      font-size:18px;
      margin-top:24px;
    }
  }
`
const Banner = () => {

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
    <BannerContainer>
      <div className="content_box">
        <h3>부가수익과<br/>가게 홍보를 한번에!</h3>
        <p>여유 시간을 활용하여 수익을 높이고<br/> 가게 홍보 효과도 누리세요!</p>
        <PrimaryButton onClick={handleButtonClick} width={'285px'} height={'55px'}>
          함께 공간을 등록해볼까요?
        </PrimaryButton>
      </div>
      <img className="banner" src={mainBanner} alt="banner"/>
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
    </BannerContainer>
  )
}

export default Banner;