import styled from 'styled-components';
import {device} from '../../styles/MediaHoc';

export const StepContainer = styled.div`
  h3 {
    margin-bottom:32px;
    font-size:28px;
  }
  h4 {
    margin-top:32px;
    margin-bottom:12px;
    font-size:18px;
  }
  h4 + p {
    margin-top:-4px;
  }
  p {
    color:${({theme}) => theme.lightColor};
    margin:12px 0 16px;
    font-size:13px;
    line-height:19px;
  }
  .nextBtn {
    width:100%;
    text-align:right;
  }
  .textArea {
    width:100%;
    padding:16px 0 0 16px;
    font-size:15px;
    line-height:22px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:8px;
    font-weight:600;
  }
  .second_header {
    margin-top:62px;
  }
  .FooterNav {
    display:flex;
    justify-content:space-between;
    @media ${device.laptopL} {
      position:relative;
      margin-top:50px;
    }
    button {
      width:50%;
      border-radius:0;
    }
    button.prev_btn {
      border:1px solid ${({theme}) => theme.strokeColor};
      background:white;
      color:${({theme}) => theme.accentColor};
    }
  }
  hr {
    border:none;
    background:rgba(0,0,0,.1);
    height:1px;
    margin-bottom:28px;
  }
  
`