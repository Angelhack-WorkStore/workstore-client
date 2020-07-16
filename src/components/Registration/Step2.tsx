import React,{useState} from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import {useSelector, useDispatch} from 'react-redux';
import {PrimaryButton} from '../Common/CustomButton';
import {Input} from '../Common/CustomInput';
import SingleImageUploader from '../Common/singleUploadImage/index';
import {PrevStep, NextStep, putValue} from '../../store/modules/registration';
import * as S from './Common.style';
import TagForm from './TagForm';
import {RootState} from '../../store/modules/index';




const TextLengthBox = styled.div`
  position:relative;
  .maxLength {
    position:absolute;
    width:100%;
    left:16px;
    bottom:16px;
    margin:0;
  }
`
const Step2 = () => {

  const {content, description} = useSelector((state:RootState) => state.registration);
  const dispatch = useDispatch();

  const [singlePic,setSinglePic] = useState([]);
  const [multiPic,setMultiPic] = useState([]);

  const handleSingleDrop = (picture:any) => {
    console.log(picture[0]);
    dispatch(putValue('thumnailImage', picture[0]))
    setSinglePic((prevState) => prevState.concat(picture));
  }

  const handleMultiDrop = (picture:any) => {
    setMultiPic((prevState) => prevState.concat(picture));
  }

  const handleValueChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id,value} = event.target;

    dispatch(putValue(id, value))
  }

  return (
    <S.StepContainer>
      <h3>공간 소개</h3>
      <h4>대표이미지</h4>
      <p>최대 10MB (JPG, JPEG, PNG)</p>
      <SingleImageUploader
        withIcon={true}
        buttonText='파일 첨부'
        onChange={handleSingleDrop}
        imgExtension={['.jpg', '.jpeg', '.png',]}
        maxFileSize={9999999}
        withPreview={true}
        singleImage={true}
      />
      <h4>상세 이미지</h4>
      <p>
        한 장당 최대 10MB (JPG, JPEG, PNG)
        <br/>
        4:3비율의 사진을 권장합니다. 상세이미지는 최대 6개까지 등록 가능합니다.
      </p>
      <h4>한줄 소개</h4>
      <TextLengthBox>
        <Input 
          id="description"
          name="공간의 특징을 한줄로 소개해주세요."
          style={{paddingBottom:'30px'}}
          onChange={handleValueChange}
          value={description}
          maxlength="90"
        />
        <p className="maxLength">{description.length} / 90</p>
      </TextLengthBox>
      <h4>소개 글</h4>
      <TextLengthBox>
        <TextareaAutosize 
          id="content"
          onChange={handleValueChange} 
          style={{paddingBottom:'35px'}}
          value={content} 
          minRows={6} 
          placeholder="공간 소개 내용" 
          maxLength={150} 
          className="textArea"
        />
        <p className="maxLength">{content.length} / 180</p>
      </TextLengthBox>
      <h4>공간 태그</h4>
      <p>최대 10개까지 등록 가능합니다.</p>
      <TagForm/>
      <div className="FooterNav">
        <PrimaryButton onClick={() => dispatch(PrevStep(1))}>이전</PrimaryButton>
        <PrimaryButton onClick={() => dispatch(NextStep(3))}>다음</PrimaryButton>
      </div>
    </S.StepContainer>
  )
}

export default Step2;