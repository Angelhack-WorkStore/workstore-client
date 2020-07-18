import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {addNotice, removeNotice, putNotice} from '../../store/modules/registration';
import {Input} from '../Common/CustomInput';
import {RootState} from '../../store/modules/index';

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

const RowBox = styled.div`
  & + & {
    margin-top:8px;
  }
`

const NoticeForm = () => {

  const {cautionNotes} = useSelector((state:RootState) => state.registration)
  const dispatch = useDispatch();

  const handleAddClick = (index:number) => {
    if((index === cautionNotes.length - 1) && (index !== 9)) {
      dispatch(addNotice(''))
    } else {
      dispatch(removeNotice(index))
    }
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>, index:number) => {
    const {value} = event.target;

    dispatch(putNotice(index, value));
  }
  
  const handleEnterDown = (event:React.KeyboardEvent<HTMLInputElement>, index:number) => {
    if((index === cautionNotes.length - 1) && (index !== 9) && event.keyCode === 13) {
      dispatch(addNotice(''))
    }
  }

  return (
    <FormContainer>
      {cautionNotes.map((notice,index) => {
        return (
            <RowBox className="row_Box" key={index}>
              <Input name={"ex. 방문 전에 연락주세요."}
                defaultValue={notice}
                onKeyDown={(event:React.KeyboardEvent<HTMLInputElement>) => handleEnterDown(event,index)} 
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleInputChange(event,index)}
              />
              <AddButton id={index + 'btn'} onClick={() => handleAddClick(index)}>
                {
                  (index === cautionNotes.length - 1) && (index !== 9) ? '+' : '-'
                }
              </AddButton>
            </RowBox>
          )
    })}
    </FormContainer>
  )
}

export default NoticeForm;