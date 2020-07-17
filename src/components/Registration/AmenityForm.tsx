import React from 'react';
import styled from 'styled-components';


const amenities = [
  'TV/프로젝터', '인터넷/와이파이', '복사/인쇄기', '화이트보드','음향/마이크','취사시설','음식물반입가능',
  '주류반입가능','샤워시설','주차','금연','반려동물가능','PC/노트북','의자/테이블','내부화장실','탈의실',
  '테라스/루프탑','공용라운지','전신거울','바베큐시설'
]

const AmenitieContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  widht:100%;
  .amenity_box {
    width:95px;
    height:95px;
    border-radius:8px;
    border:1px solid ${({theme}) => theme.strokeColor};
    
  }
`

const AmenityBox = styled.div`
  cursor:pointer;
  p {
    margin-top:4px;
    font-size:12px;
    text-align:center;
  }
  margin-right:20px;
`
const AmenityForm = () => {

  return (
    <AmenitieContainer>
      {amenities.map(amenity => {
        return (
          <AmenityBox key={amenity}>
            <div className="amenity_box"></div>
            <p>{amenity}</p>
          </AmenityBox>
        )
      })}
    </AmenitieContainer>
  )
}

export default AmenityForm;