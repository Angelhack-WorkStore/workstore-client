import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as S from '../../components/Auth/Auth.style';
import {Input} from '../../components/Common/CustomInput';
import {NoBorderButton} from '../../components/Common/CustomButton';
import {RootState} from '../../store/modules/index';
import {signupAPI} from '../../store/apis/auth';


const SignupContainer = () => {

  
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState({
    allAgree:false,
    service:false,
    policy:false
  });

  const [inputs, setInputs] = useState({
    email:'',
    name:'',
    password:''
  });

  const {allAgree,service,policy} = isChecked;
  const {email, name, password} = inputs;

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    if(event.target.id === 'allAgree') {
      if(allAgree) {
        setIsChecked({
          ...isChecked,
          allAgree:false,
          service:false,
          policy:false
        })
      } else {
        setIsChecked({
          ...isChecked,
          allAgree:true,
          service:true,
          policy:true
        })
      }
    } else {
      setIsChecked({
        ...isChecked,
        [id]: checked 
      })
    }
  }
  
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target;
    setInputs({
      ...inputs,
      [id]: value,
    })
  }

  const handleSignupSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return signupAPI({email, name, password})
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <S.AuthContainer>
      <h2>호스트 가입</h2>
      <S.SocialButton bgColor="#FADE4B">
        카카오 계정으로 로그인
      </S.SocialButton>
      <S.SocialButton>
        구글 계정으로 로그인
      </S.SocialButton>
      <S.Orline>
        <div className="line" />
        <div className="or">또는</div>
      </S.Orline>
      <form onSubmit={handleSignupSubmit}>
        <AuthInput id="email" type="email" name="이메일 주소" width={'618px'} value={email} onChange={handleInputChange}/>
        <AuthInput id="name" name="이름" value={name} width={'618px'} onChange={handleInputChange}/>
        <AuthInput id="password" type="password" name="비밀번호 설정" width={'618px'} value={password} onChange={handleInputChange}/>
        <S.CheckBoxBlock topMargin="24px">
          <div>
            <input onChange={handleCheckChange} id="allAgree" type="checkbox"/>
            <label htmlFor="allAgree">전체 약관에 동의합니다.</label> 
          </div>
        </S.CheckBoxBlock>
        <hr/>
        <S.CheckBoxBlock topMargin="16px">
          <div>
              <input onChange={handleCheckChange} checked={service} id="service" type="checkbox"/>
              <label htmlFor="service">서비스 이용약관</label> 
          </div>
          <NoBorderButton underline={true} color="black">
            보기
          </NoBorderButton>
        </S.CheckBoxBlock>
        <S.CheckBoxBlock topMargin="14px">
          <div>
              <input onChange={handleCheckChange} checked={policy} id="policy" type="checkbox"/>
              <label htmlFor="policy">개인정보 처리방침</label> 
          </div>
          <NoBorderButton underline={true} color="black">
            보기
          </NoBorderButton>
        </S.CheckBoxBlock>
        <S.AuthButton>
          이메일로 가입
        </S.AuthButton>
      </form>
      <S.NomemBlock>
        <span>
          이미 호스트로 가입하셨나요?
        </span>
        <Link to="/auth/login">
          <NoBorderButton>
            로그인
          </NoBorderButton>
        </Link>
      </S.NomemBlock>
    </S.AuthContainer>
  )
}


export default SignupContainer;

const AuthInput = styled(Input)`
  & + & {
    margin-top: 8px;
  }
`