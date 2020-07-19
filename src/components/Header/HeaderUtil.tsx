import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useLocation,Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../lib/mainLogo.png'
import {RootState} from '../../store/modules';

const UtilContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:1200px;
  height:100%;
  margin:0 auto;
  .loginBtn {
    position:relative;
    right:0px;
    cursor:pointer;
  }
  .descript {
    position:relative;
    right:0px;
    font-weight:bold;
  }
  .profile_box {
    display:flex;
    align-items:center;
  }
`

const NavContainer = styled.div`
  display:flex;
  align-items:center;
  nav {
    position:relative;
    height: 43px;
    margin-left:24px;
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
  .logo {
    position:relative;
    top:5px;
    width:164px;
    height:170px;
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

  const {name, imageUrl} = useSelector((state:RootState) => state.authentication);
  const location = useLocation();
  const {pathname} = location;
  const [navLocation, setNavLocation] = useState(pathname === '/spaceinfo' ? 29 : pathname === '/resurvation' ? 154 : 264)

  useEffect(() => {
    if(pathname === '/spaceinfo') {
      setNavLocation(29)
    } else if(pathname.match('resurvation')) {
      setNavLocation(154)
    } else if( pathname === '/review') {
      setNavLocation(264)
    }
  },[pathname])
  
  return (
    <UtilContainer>
      <NavContainer>
          <Link to="/">
            <img className="logo" src={Logo} alt="logo"/>
          </Link>
          {
            !pathname.match('/registration/') &&
              <nav>
                <ul>
                  <li><Link to="/spaceinfo">공간정보 관리</Link></li>
                  <li><Link to={`/resurvation/${name}`}>예약관리</Link></li>
                  <li><Link to="/review">후기관리</Link></li>
                </ul>
                {
                  (
                    pathname === '/spaceinfo' ||
                    pathname.match('/resurvation/') ||  
                    pathname === '/review'
                  ) && <NavLine location={navLocation}/> 
                }
              </nav>    
          }
      </NavContainer>
      {
        pathname === '/registration' ? 
          <div className="descript">공간 등록 프로세스</div> 
      :
        name ? 
          <div className="profile_box">
            <Avatar alt={name} src={imageUrl}></Avatar> {name}
          </div> 
          : <Link to="/auth/login">
          {
            pathname === '/auth/login' || 
            pathname === '/auth/signup' || 
            <div className="loginBtn">호스트 로그인</div>
          }
          </Link>
      }
      
    </UtilContainer>
  )
}

export default HeaderUtil;