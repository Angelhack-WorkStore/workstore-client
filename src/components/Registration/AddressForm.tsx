import React,{useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {putAdress} from '../../store/modules/registration';
import {RootState} from '../../store/modules/index';
import {Input} from '../Common/CustomInput';

const AddressForm = () => {
  // zipCode,address1,address2
  const {address} = useSelector((state:RootState) => state.registration);
  const {address1,address2,zipCode} = address
  const dispatch = useDispatch();

  const detailRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
      const scriptId = 'daum_postcode_script';
      const script = document.createElement('script');
      script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.id = scriptId
      script.onerror = error => console.log(error);
      document.body.appendChild(script);
  
  })

  const openDaumPostcode = () => {
    new (window as any).daum.Postcode({
      oncomplete: function(data:any) {
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          dispatch(putAdress('address1',data.roadAddress))
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          dispatch(putAdress('address1',data.jibunAddress))
        }
        dispatch(putAdress('zipCode',data.zonecode))
        if(detailRef.current) {
          detailRef.current.focus();
        }
      }
    }).open();
  }

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target
    dispatch(putAdress(id, value));
  }

  return (
    <>
      <Input type="text" readOnly width={'183px'} onChange={handleValueChange} id="zipCode"  value={zipCode} name="우편번호"/>
      <ButtonInput type="button" width={'144px'} height={'57px'} value="주소 찾기" onClick={() => openDaumPostcode()}/>
      <Input type="text" readOnly onChange={handleValueChange} id="address1"  value={address1} name="주소"/>
      <Input type="text" onChange={handleValueChange} ref={detailRef} value={address2} id="address2" name="상세주소"/>
    </>
  )
}

const ButtonInput = styled(Input)`
  padding:0;
  margin:0 0 8px 8px;
  cursor:pointer;
  background:${({theme}) => theme.subBtnColor};
  &:hover {
    background:${({theme}) => theme.subBtnHover};
  }
`

export default AddressForm;