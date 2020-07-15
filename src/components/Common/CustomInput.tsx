import styled from 'styled-components';


export const Input = styled.input.attrs(props => ({
    type: props.type ? props.type : 'text',
    size: props.size || "1em",
    placeholder : props.name || "",
  }))`
    width: ${(props) => props.width ? `calc(${props.width} - 18px)` : 'calc(100% - 18px)'};
    height: ${(props) => props.height || '55px'};
    border-radius:8px;
    border:1px solid rgba(0,0,0,.1);
    padding-left:16px;
    font-size:15px;
    & + & {
      margin-top:8px;
    }
`;


