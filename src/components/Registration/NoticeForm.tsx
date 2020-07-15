import React,{useState} from 'react';
import styled from 'styled-components';
import {Input} from '../Common/CustomInput';
import {PrimaryButton} from '../Common/CustomButton';

const FormContainer = styled.div`
  .row_Box {
    display:flex;
  }
`

const AddButton = styled.button`
  width:68px;
  margin-left:8px;
  background:#ECEFF1;
  border:none;
`

const NoticeForm = () => {

  
  return (
    <FormContainer>
      <div className="row_Box">
        <Input name={"예약 시 이렇게 해주세요."}/>
        <AddButton >
          +
        </AddButton>
      </div>
    </FormContainer>
  )
}

export default NoticeForm;