import React,{useState} from 'react';
import styled from 'styled-components';
import {PrimaryButton} from '../Common/CustomButton';
import {Link, useHistory} from 'react-router-dom';
import Dialog from '../Common/Dialog';
import storage from '../../store/storageHoc';
import {ACCESS_TOKEN} from '../../store/Contants';

const EmptyContainer = styled.div`
  width:100%;
  min-height:488px;
  text-align:center;
  .image_box {
    display:inline-block;
    padding-top:60px;
    width:150px;
    height:150px;
    font-size:80px;
    margin-top:58px;
    border-radius:50%;
    background:#E6F3F2;
  }
  p {
    margin-top:32px;
    font-size:16px;
  }
`

const EmptySpaceInfo = () => {

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
    <EmptyContainer>
      <div className="image_container">
        <div className="image_box">🏡</div>
        <p>운영중인 공간이 없습니다.<br/> 등록하러 가볼까요?</p>
      </div>
      <PrimaryButton 
        width={'184px'} 
        height={'48px'}
        onClick={handleButtonClick}
      >
        공간 등록하기
      </PrimaryButton>
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
    </EmptyContainer>
  )
}

export default EmptySpaceInfo;