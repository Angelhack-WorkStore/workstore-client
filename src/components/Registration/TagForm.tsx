import React,{useState} from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {Input} from '../Common/CustomInput';
import {putTag, RemoveTag} from '../../store/modules/registration';
import {RootState} from '../../store/modules/index';

const TagContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
`
const TagBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:auto;
  height:44px;
  padding:0 15px;
  background:#ECEFF1;
  color:#2B2E39;
  border-radius:8px;
  margin-top:12px;
  cursor:pointer;
  & + & {
    margin-left:8px;
  }
  &:hover {
    background:
  }
`

const TagForm = () => {

  const {tags} = useSelector((state:RootState) => state.registration);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleEnterDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    const {value} = event.currentTarget;

    if(event.keyCode === 13) {
      if(value === '' || (tags.indexOf(value) !== -1) || tags.length >= 10) {
        setValue('');
      } else {
        dispatch(putTag(value))
        setValue('');
      }
    }
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleTagClick = (index:number) => {
    dispatch(RemoveTag(index));
  }
  return (
    <>
      <Input
        name={"노출할 태그를 입력해주세요. ex. 코워킹스페이스"} 
        value={value} 
        onChange={handleInputChange} 
        onKeyDown={handleEnterDown}
      />
      <TagContainer>
        {tags.map((tag,index) => {
          return (
            <TagBox onClick={() => handleTagClick(index)}># {tag}</TagBox>
          )
        })}
      </TagContainer>
    </>
  )
}

export default TagForm;