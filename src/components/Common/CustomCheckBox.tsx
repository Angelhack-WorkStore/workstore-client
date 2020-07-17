import styled from 'styled-components';


export const CheckBox = styled.div`
  display: inline-block;
  & + & {
    margin-left: 24px;
  }
  > input {
    display:none;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-top:3px;
    padding-left: 35px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    font-size:15px;
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 24px; height: 24px; /* dim. de la case */
      border: 1px solid #aaa;
      border-radius: 2px; /* angles arrondis */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: 2px; left: 6px;
      font-size: 16px;
      color: white;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
    &:before {
      border:none;
      background:${({theme}) => theme.accentColor};
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
`;