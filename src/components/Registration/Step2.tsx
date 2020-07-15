import React,{useState} from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import {useDispatch} from 'react-redux';
import {Input} from '../Common/CustomInput';
import {PrimaryButton} from '../Common/CustomButton';
import SingleImageUploader from '../Common/singleUploadImage/index';
import {PrevStep, NextStep, putValue} from '../../store/modules/registration';
import NoticeForm from './NoticeForm';


const StepContainer = styled.div`
  h3 {
    margin-bottom:32px;
    font-size:28px;
  }
  h4 {
    margin:32px 0 8px;
    font-size:18px;
  }
  p {
    color:${({theme}) => theme.lightColor};
    margin-bottom:16px;
    font-size:13px;
    line-height:19px;
  }
  .nextBtn {
    width:100%;
    text-align:right;
  }
  .textArea {
    width:100%;
    padding:16px 0 0 16px;
    font-size:15px;
    line-height:22px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:8px;
    font-weight:600;
  }
  .second_header {
    margin-top:62px;
  }
  .FooterNav {
    position:relative;
    bottom:0;
    display:flex;
    justify-content:space-between;
  }
`

const NavButton = styled(PrimaryButton)`
`

const TagInput = styled(Input)`
  margin-bottom:12px;
`
const Step2 = () => {

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
  return (
    <StepContainer>
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
      <h4>소개 글</h4>
      <TextareaAutosize minRows={7} placeholder="공간 소개 내용" maxLength={150} className="textArea"/>
      <h4>공간 태그</h4>
      <p>최대 10개까지 등록 가능합니다.</p>
      <TagInput name={"노출할 태그를 입력해주세요. ex. 코워킹스페이스"}/>
      <h3 className="second_header">유의사항 및 편의시설</h3>
      <h4>예약 시 유의 사항</h4>
      <p>최대 10개까지 등록 가능합니다.</p>
      <NoticeForm/>
      {/* <Input name={"예약 시 이렇게 해주세요."}/>
      <Input name={"ex. 방문 전에 연락주세요."}/> */}
      <h4>편의 시설</h4>
      <p>구비된 편의시설을 선택해 주세요</p>
      <div className="FooterNav">
        <NavButton onClick={() => dispatch(PrevStep(1))}>이전</NavButton>
        <NavButton onClick={() => dispatch(NextStep(3))}>다음</NavButton>
      </div>
    </StepContainer>
  )
}

export default Step2;