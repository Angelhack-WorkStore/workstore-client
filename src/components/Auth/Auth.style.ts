import styled from 'styled-components';


const AuthContainer = styled.section`
  width:600px;
  height:auto;
  margin:52px auto 0;
  text-align:center;
  h2 {
    font-size:40px;
    margin-bottom:60px;
  }
  hr {
    border-color:rgba(0,0,0,.1);
  }
`

type SocialType = {
  bgColor?:string,
}

const SocialButton = styled.button`
  width:100%;
  height:55px;
  border:1px solid ${({theme}) => theme.basicBorderColor};
  border-radius:8px;
  background:${(props:SocialType) => props.bgColor || '#FFFFFF'};
  font-size:15px;
  & + & {
    margin-top: 8px;
  }
`

const Orline = styled.div`
  width:100%;
  height:20px;
  margin:32px auto;
  .line {
    position:relative;
    height:1px;
    background-color:#d6d6d6;
    top:55%;
  }
  .or {
    position:absolute;
    display:inline;
    background-color:#fafbfc;
    color:black;
    width:40px;
    transform:translateX(-20px);
    font-size:15px;
    color:rgba(0,0,0,.6);
  }
`

const AuthButton = styled.button`
  width:100%;
  height:55px;
  color:white;
  background:${({theme}) => theme.accentColor};
  border-radius:8px;
  border:none;
  font-size:15px;
  font-weihgt:bold;
  margin-top:8px;
  &:hover {
    background:${({theme}) => theme.accentHover};
  }
` 

const NomemBlock = styled.div`
  display:flex;
  justify-content:center;
  margin-top:16px;
  span {
    margin-right:8px;
  }
`
type CheckProps = {
  topMargin:string,
}
const CheckBoxBlock = styled.div<CheckProps>`
  display:flex;
  justify-content: space-between;
  width:100%;
  label {
    margin-left:8px;
    font-size:15px;
  }
  margin-top: ${props => props.topMargin};
`


export {
  AuthContainer,
  SocialButton,
  Orline,
  AuthButton,
  NomemBlock,
  CheckBoxBlock,
}