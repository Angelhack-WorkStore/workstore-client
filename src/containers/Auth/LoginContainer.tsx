import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as S from '../../components/Auth/Auth.style';
import {Input} from '../../components/Common/CustomInput';
import {NoBorderButton} from '../../components/Common/CustomButton';
import {loginAPI} from '../../store/apis/auth';
import storage from '../../store/storageHoc';
import {GOOGLE_HREF, KAKAO_HREF} from '../../store/Contants';

const LoginContainer = () => {

  const [inputs, setInputs] = useState({
    email:'',
    password:''
  });

  const {email, password} = inputs


  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target;
    setInputs({
      ...inputs,
      [id]: value,
    })
  }
  

  const handleSubmitLogin = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginAPI({email,password})
    .then(res => {
      storage.set('accessToken', res.data);
    })
    .catch((err:Error) => {
      console.log(err);
    })
  }

  return (
    <S.AuthContainer>
      <h2>호스트 로그인</h2>
      <S.SocialButton 
        bgColor="#FADE4B" 
        onClick={() => (window as any).location = KAKAO_HREF}
      >
        카카오 계정으로 로그인
      </S.SocialButton>
      <S.SocialButton
        onClick={() => (window as any).location = GOOGLE_HREF}
      >
        구글 계정으로 로그인
      </S.SocialButton>
      <S.Orline>
        <div className="line" />
        <div className="or">또는</div>
      </S.Orline>
      <form onSubmit={handleSubmitLogin}>
        <Input type="email" name="이메일 주소" id="email" width={'618px'} value={email} onChange={handleInputChange}/>
        <Input type="password" name="비밀번호 설정" width={'618px'} id="password" value={password} onChange={handleInputChange}/>
        <S.AuthButton>
          이메일로 로그인
        </S.AuthButton>
      </form>
      <S.NomemBlock>
        <Link to="/auth/signup">
          <NoBorderButton style={{fontWeight:'bold'}}>
            비밀번호 찾기
          </NoBorderButton>
          &nbsp;·&nbsp;
          <NoBorderButton style={{fontWeight:'bold'}}>
            호스트 가입
          </NoBorderButton>
        </Link>
      </S.NomemBlock>
    </S.AuthContainer>
  )
}

export default LoginContainer;

