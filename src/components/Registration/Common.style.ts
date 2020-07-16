import styled from 'styled-components';

export const StepContainer = styled.div`
  h3 {
    margin-bottom:32px;
    font-size:28px;
  }
  h4 {
    margin:32px 0 8px;
    font-size:18px;
  }
  p {
    color:${({theme}) => theme.lightColor};
    margin-bottom:16px;
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
    position:relative;
    bottom:0;
    display:flex;
    justify-content:space-between;
  }
  hr {
    border:none;
    background:rgba(0,0,0,.1);
    height:1;
  }
  
`