import React from 'react';
import styled from 'styled-components';
import { BsChatSquareDots } from "react-icons/bs";


const HeadContainer = styled.div`
  h2 {
    font-size:40px;
    margin-bottom:81px;
  }
`
const StatusBlock = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  height:279px;
  .status_box1, .status_box2, .status_box3 {
    display:flex;
    align-items:center;
    justify-content:center;
    width:110px;
    margin:0 auto;
    border-radius:8px;
    height:100%;
    text-align:center;
    color:white;
    p {
      font-size:18px; 
    }
    h4 {
      font-size:28px;
      margin-top:8px;
    }
    h3 {
      margin-top:26px;
      font-weight:300;
      font-size:70px;
      color:#E6F3F2;
    }
  }
  .status_box1, .status_box2 {
    width:285px;
    background:#008B7A;
  }
  .status_box1 {
    background:${({theme}) => theme.accentColor};
  }
  .status_box3 {
    color:black;
    width:590px;
    background:#E6F3F2;
    h3 {
      color:${({theme}) => theme.accentColor};
      font-weight:normal;
    }
  }
`


const ContentBlock = styled.div`
  width:100%;
  margin-top:108px;
  h3 {
    font-size:28px;
    margin-bottom:47px;
  }
  hr {
    height:1px;
    border:none;
    background:${({theme}) => theme.strokeColor};
    margin:29px 0 47px;
  }
  .content_header {
    display:flex;
    justify-content:space-between;
    h4 {
      font-size:18px;
    }
  }
  .middle_head {
    margin-top:100px;
    font-size:18px;
  }
`

const UserRow = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:16px;
  .block_block {
    display:flex;
    align-items:center;
  }
  .user_name {
    margin-left:48px;
  }
  .during {
    margin-left:40px;
  }
  .trandName {
    margin-left:41px;
  }
  .date {
    margin-right:83px;
  }
  .price{
    margin-right:88px;
  }
  .cancel_button {
    display:flex;
    justify-content:center;
    align-items:center;
    width:44px;
    height:22px;
    border-radius:16px;
    color:white;
    font-weight:bold;
    font-size:12px;
    cursor:pointer;
    background:#DE2451;
    margin-right:71px;
  }
  .icon {
    position:relative;
    right:0;
    font-size:24px;
    font-weight:bold;
  }
  img {
    width:65px;
    height:65px;
    border-radius:50%;
    border:2px solid ${({theme}) => theme.accentColor};
    margin-left:40px;
  }
  & + & {
    margin-top:39px;
  }
`
const ResurvationContainer = () => {

  const monthUser = [
    {
      image:'/userImages/user1.png',
      id:'dqdq4197',
      name:'김서훈 (이용자 1명)',
      during:'1개월',
      trandName:'[강남] 카페 멜로워',
      date:'2020.07.15~2020.08.14',
      price:'150,000 원'
    },
    {
      image:'/userImages/user2.png',
      id:'kaka1234',
      name:'이서빈 (이용자 2명)',
      during:'1개월',
      trandName:'[성수] 인더매스 성수',
      date:'2020.07.20~2020.08.19',
      price:'300,000 원'
    },
    {
      image:'/userImages/user3.png',
      id:'kim1342',
      name:'김미서 (이용자 3명)',
      during:'3개월',
      trandName:'[상수] 테라커피',
      date:'2020.07.01~2020.09.30',
      price:'350,000 원'
    }
  ]

  const dayUser = [
    {
      image:'/userImages/user4.png',
      id:'sena1234',
      name:'임세나 (이용자 3명)',
      during:'3일',
      trandName:'[청담] 브루웍스',
      date:'2020.07.01~2020.07.03',
      price:'63,000 원'
    },
    {
      image:'/userImages/user5.png',
      id:'solomon1234',
      name:'솔로몬 (이용자 1명)',
      during:'1일',
      trandName:'[성수] 인더매스 성수',
      date:'2020.07.07~2020.07.17',
      price:'17,000 원'
    },
    {
      image:'/userImages/user6.png',
      id:'sujin13ho',
      name:'김수진 (이용자 9명)',
      during:'1일',
      trandName:'[강남] 카페 멜로워',
      date:'2020.07.01~2020.07.03',
      price:'70,000 원'
    },
    {
      image:'/userImages/user7.png',
      id:'heinfsdf123',
      name:'정혜인 (이용자 3명)',
      during:'1일',
      trandName:'[청담] 브루웍스',
      date:'2020.07.01~2020.07.03',
      price:'21,000 원'
    },
    {
      image:'/userImages/user8.png',
      id:'heesuio',
      name:'최희수 (이용자 2명)',
      during:'5일',
      trandName:'[상수] 테라커피',
      date:'2020.07.25~2020.07.29',
      price:'70,000 원'
    }
  ]
  return (
    <>
      <HeadContainer>
        <h2>예약 관리</h2>
        <StatusBlock>
          <div className="status_box1">
            <div>
              <p>예약 현황</p>
              <h4>하루 단위</h4>
              <h3>3</h3>
            </div>
          </div>
          <div className="status_box2">
            <div>
              <p>예약 현황</p>
              <h4>개월 단위</h4>
              <h3>5</h3>
            </div>
          </div>
          <div className="status_box3">
            <div>
              <p>매출 집계</p>
              <h4>월간 매출 현황</h4>
              <h3>1,761,000</h3>
            </div>
          </div>
        </StatusBlock>
        <ContentBlock>
          <h3>예약자 현황</h3>
          <div className="content_header">
            <h4>개별 단위</h4>
            <div>
              {/* 버튼세개 */}
            </div>
          </div>
          <hr/>
          <div className="user_block">
            {monthUser.map((user:any) => {
              return <UserRow key={user.id}>
                <div className="block_block">
                <img src={user.image} alt=""/>
                <div className="user_name">
                  {user.id}
                  <div>{user.name}</div>
                </div>
                <div className="during">
                  {user.during}
                </div>
                <div className="trandName">
                  {user.trandName}
                </div>
                </div>
                <div className="block_block">
                <div className="date">
                  {user.date}
                </div>
                <div className="price">
                  {user.price}
                </div>
                <div className="cancel_button">
                  취소
                </div>
                <BsChatSquareDots className="icon"/>
                </div>
              </UserRow>
            })}
          </div>
          <h4 className="middle_head">하루 단위</h4>
          <hr/>
          <div className="user_block">
            {dayUser.map((user:any) => {
              return <UserRow key={user.id}>
                <div className="block_block">
                <img src={user.image} alt=""/>
                <div className="user_name">
                  {user.id}
                  <div>{user.name}</div>
                </div>
                <div className="during">
                  {user.during}
                </div>
                <div className="trandName">
                  {user.trandName}
                </div>
                </div>
                <div className="block_block">
                <div className="date">
                  {user.date}
                </div>
                <div className="price">
                  {user.price}
                </div>
                <div className="cancel_button">
                  취소
                </div>
                <BsChatSquareDots className="icon"/>
                </div>
              </UserRow>
              })
            }
          </div>
        </ContentBlock>
      </HeadContainer>
    </>
  )
}

export default ResurvationContainer;