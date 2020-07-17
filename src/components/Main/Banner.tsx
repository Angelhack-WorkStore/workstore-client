import React from 'react';
import styled from 'styled-components';
import {PrimaryButton} from '../Common/CustomButton';
import mainBanner from '../../lib/mainBanner.jpg';
import {Link} from 'react-router-dom';

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
    width:100%;
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
  return (
    <BannerContainer>
      <div className="content_box">
        <h3>부가수익과<br/>가게 홍보를 한번에!</h3>
        <p>여유 시간을 활용하여 수익을 높이고<br/> 가게 홍보 효과도 누리세요!</p>
        <Link to="/registration">
          <PrimaryButton width={'285px'} height={'55px'}>함께 공간을 등록해볼까요?</PrimaryButton>
        </Link>
      </div>
      <img className="banner" src={mainBanner} alt="banner"/>
    </BannerContainer>
  )
}

export default Banner;