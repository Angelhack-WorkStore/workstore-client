import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import SpaceInfoDialog from '../Common/SpaceInfoDialog';


const DetailContainer = styled.div`
  width:100%;
  min-height:488px;
  text-align:left;
  .image_box {
    display:inline-block;
    padding-top:60px;
    width:150px;
    height:150px;
    font-size:80px;
    margin-top:58px;
    border-radius:50%;
    background:#E6F3F2;
    padding:0 
  }
  p {
    margin-top:32px;
    font-size:16px;
  }
  .block {
    position:relative;
    text-align:left;
    margin-top:88px;
    width:285px;
    height:357px;
    border-radius:8px;
    border:1px solid ${({theme}) => theme.strokeColor};
    .foot {
      position:absolute;
      bottom:0;
      display:flex;
      width:100%;
      border:1px solid ${({theme}) => theme.strokeColor};
      border-radius:8px;
      height:47px;
      .left {
        border-right:1px solid ${({theme}) => theme.strokeColor};
        color:${({theme}) => theme.accentColor};
      }
      div {
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:15px;
        flex:1;
      }
    }
    .content {
      width:237px;
      margin:0 auto;
    }
    img {
      width:285px;
      height:213px;
    }
    h3 {
      font-size:18px;
      margin-top:20px;
    }
    p {
      font-size:13px;
      margin-top:8px;
      color:{({theme}) => theme.grayColor7};
    }
  }
`


type DetailType = {
  data:any
}
const SpaceDetail = ({data}:DetailType) => {

  const [visible, setVisible] = useState(true);

  const history = useHistory();
  console.log(data);

  const handleConfirmClick = () => {
    setVisible(false);
    history.push('/registration');
  }

  const handleCancelClick = () => {
    setVisible(false);
  }

  function getFormatDate(date:any){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '.' + month + '.' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  let date1 = new Date();

  const date = getFormatDate(date1);

  return (
    <DetailContainer>
      <SpaceInfoDialog
        title="공간 등록 완료"
        confirmtext="공간 수정하기"
        visible={visible}
        onConfirm={handleConfirmClick}
        onCancel={handleCancelClick}
      >
        짝짝짝 호스트님의 공간이 등록되었어요!<br/> 공간정보 관리에서 언제든 수정하실 수 있어요!
        </SpaceInfoDialog>
        <div className="block">
          <img src="/images/mask.png" alt=""/>
          <div className="content">
            <h3>{data.name}</h3>
            <p>등록일 {date}</p>
          </div>
          <div className="foot">
            <div className="left">수정</div>
            <div>삭제</div>
          </div>
        </div>
    </DetailContainer>
  )
}

export default SpaceDetail;