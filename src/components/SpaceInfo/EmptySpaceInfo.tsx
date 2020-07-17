import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {PrimaryButton} from '../Common/CustomButton';

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
  
  
  return (
    <EmptyContainer>
      <div className="image_container">
        <div className="image_box">🏡</div>
        <p>운영중인 공간이 없습니다.<br/> 등록하러 가볼까요?</p>
      </div>
      <Link to="registration">
        <PrimaryButton width={'184px'} height={'48px'}>공간 등록하기</PrimaryButton>
      </Link>
    </EmptyContainer>
  )
}

export default EmptySpaceInfo;