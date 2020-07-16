import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {useLocation,Link} from 'react-router-dom';

const UtilContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:1200px;
  height:100%;
  margin:0 auto;
  h3 {
    font-size:33px;
    font-weight:bold;
    cursor:pointer;
  }
  .loginBtn {
    position:relative;
    right:0px;
    cursor:pointer;
  }
`

const NavContainer = styled.div`
  display:flex;
  align-items:center;
  nav {
    position:relative;
    height: 43px;
    ul {
      display:flex;
      height:100%;
      li {
        height:100%;
        font-size:15px;
        margin:0 24px;
        a {
          display:flex;
          align-items:center;
          height:100%;
        }
      }
    }
  }
`

const NavLine = styled.div<NavLineProps>`
  position:absolute;
  top:56px;
  left:${props => props.location}px;
  width:87px;
  height:3px;
  background:${({theme}) => theme.accentColor};
  transition:.4s;
`
type NavLineProps = {
  location:number;
}
const HeaderUtil = () => {
  const location = useLocation();
  const {pathname} = location;
  const [navLocation, setNavLocation] = useState(pathname === '/spaceinfo' ? 29 : pathname === '/reservation' ? 154 : 264)

  useEffect(() => {
    if(pathname === '/spaceinfo') {
      setNavLocation(29)
    } else if(pathname === '/reservation') {
      setNavLocation(154)
    } else if( pathname === '/review') {
      setNavLocation(264)
    }
  },[pathname])
  
  return (
    <UtilContainer>
      <NavContainer>
        <h3>
          <Link to="/">workstore</Link>
        </h3>
        <nav>
          <ul>
            <li><Link to="/spaceinfo">공간정보 관리</Link></li>
            <li><Link to="/reservation">예약관리</Link></li>
            <li><Link to="/review">후기관리</Link></li>
          </ul>
          {
            (
              pathname === '/spaceinfo' ||
              pathname === '/reservation' ||  
              pathname === '/review'
            ) && <NavLine location={navLocation}/> 
          }
          
        </nav>
      </NavContainer>
      <Link to="/auth/login">
        {
          pathname === '/auth/login' || 
          pathname === '/auth/signup' || 
          <div className="loginBtn">호스트 로그인</div>
        }
      </Link>
      
    </UtilContainer>
  )
}

export default HeaderUtil;