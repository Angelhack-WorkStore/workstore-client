import styled from 'styled-components';

type ButtonProps = {
  theme:any,
  color?:string,
  underline?:boolean,
}
export const NoBorderButton = styled.button<ButtonProps>`
  border:none;
  background:none;
  color:${props => props.color || props.theme.accentColor};
  font-size:15px;
  cursor:pointer;
  text-decoration:${(props) => props.underline ? 'underline' : 'none'} ;
`

type PrimayProps = {
  width?:string,
  height?:string,
  bgColor?:string,
}

export const PrimaryButton = styled.button<PrimayProps>`
  border:none;
  width:${props => props.width || '140px'};
  height:${props => props.height || '55px'};
  background:${props => props.bgColor || props.theme.accentColor};
  color:white;
  font-size:15px;
  cursor:pointer;
  margin-top:48px;
  &:hover {
    background:${({theme}) => theme.accentHover};
  }
  transition:background .3s;
`

export const SubButton = styled.button<PrimayProps>`
  border:none;
  width:${props => props.width || '140px'};
  height:${props => props.height || '55px'};
  background:${props => props.bgColor || props.theme.subBtnColor};
  color:${({theme}) => theme.boldColor};
  font-size:15px;
  cursor:pointer;
  margin-top:48px;
  &:hover {
    background:${({theme}) => theme.subBtnHover};
  }
  transition:background .3s;
`