import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {checkAmennity, uncheckAmennity} from '../../store/modules/registration';
import {RootState} from '../../store/modules'
import svg20 from './amenityImage/Frame.svg';
import svg1 from './amenityImage/Frame-1.svg';
import svg2 from './amenityImage/Frame-2.svg';
import svg3 from './amenityImage/Frame-3.svg';
import svg4 from './amenityImage/Frame-4.svg';
import svg5 from './amenityImage/Frame-5.svg';
import svg6 from './amenityImage/Frame-6.svg';
import svg7 from './amenityImage/Frame-7.svg';
import svg8 from './amenityImage/Frame-8.svg';
import svg9 from './amenityImage/Frame-9.svg';
import svg10 from './amenityImage/Frame-10.svg';
import svg11 from './amenityImage/Frame-11.svg';
import svg12 from './amenityImage/Frame-12.svg';
import svg13 from './amenityImage/Frame-13.svg';
import svg14 from './amenityImage/Frame-14.svg';
import svg15 from './amenityImage/Frame-15.svg';
import svg16 from './amenityImage/Frame-16.svg';
import svg17 from './amenityImage/Frame-17.svg';
import svg18 from './amenityImage/Frame-18.svg';
import svg19 from './amenityImage/Frame-19.svg';
import checkSvg2 from './armenityHover/Pictogram-02.svg';
import checkSvg3 from './armenityHover/Pictogram-03.svg';
import checkSvg4 from './armenityHover/Pictogram-04.svg';
import checkSvg5 from './armenityHover/Pictogram-05.svg';
import checkSvg6 from './armenityHover/Pictogram-06.svg';
import checkSvg7 from './armenityHover/Pictogram-07.svg';
import checkSvg8 from './armenityHover/Pictogram-08.svg';
import checkSvg9 from './armenityHover/Pictogram-09.svg';
import checkSvg10 from './armenityHover/Pictogram-10.svg';
import checkSvg11 from './armenityHover/Pictogram-11.svg';
import checkSvg12 from './armenityHover/Pictogram-12.svg';
import checkSvg13 from './armenityHover/Pictogram-13.svg';
import checkSvg14 from './armenityHover/Pictogram-14.svg';
import checkSvg15 from './armenityHover/Pictogram-15.svg';
import checkSvg16 from './armenityHover/Pictogram-16.svg';
import checkSvg17 from './armenityHover/Pictogram-17.svg';
import checkSvg18 from './armenityHover/Pictogram-18.svg';
import checkSvg19 from './armenityHover/Pictogram-19.svg';
import checkSvg20 from './armenityHover/Pictogram-20.svg';
import checkSvg21 from './armenityHover/Pictogram-21.svg';



const DumyAmenities = [
  'TV/프로젝터', '인터넷/와이파이', '복사/인쇄기', '화이트보드','음향/마이크','취사시설','음식물반입가능',
  '주류반입가능','샤워시설','주차','금연','반려동물가능','PC/노트북','의자/테이블','내부화장실','탈의실',
  '테라스/루프탑','공용라운지','전신거울','바베큐시설'
]
const EngDumyAmenities = [
  'TV',
  'WIFI',
  'PRINTER',
  'WHITEBOARD',
  'SOUND',
  'COOKING',
  'FOOD',
  'BEVERAGES',
  'SHOWER',
  'PARKING',
  'NO_SMOKE',
  'PET',
  'PC',
  'TABLE',
  'INTERNAL_TOILET',
  'DRESS_ROOM',
  'ROOFTOP',
  'PUBLIC_ROUNGE',
  'MIRROR',
  'FAX',
  'BARBECUE',
]

// console.log(svg20);
const arr = [svg3,svg20,svg4,svg2,svg5,svg8,svg6,svg7,svg1,svg9,svg10,svg11,svg12,svg13,svg14,svg15,svg16,svg17,svg18,svg19]
const checkArr = [
  checkSvg2,checkSvg3,checkSvg4,checkSvg5,checkSvg6,checkSvg7,checkSvg8,checkSvg9,checkSvg10,checkSvg11,
  checkSvg12,checkSvg13,checkSvg14,checkSvg15,checkSvg16,checkSvg17,checkSvg18,checkSvg19,checkSvg20,checkSvg21
]

const AmenitieContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  widht:100%;
  .amenity_box {
    display:flex;
    align-items:center;
    justify-content:center;
    width:95px;
    height:95px;
    color:red;
    border-radius:8px;
    border:1px solid ${({theme}) => theme.strokeColor};
    &:hover {
      border-color:${({theme}) => theme.grayColor6};
    }
  }
  .checked {
    border:1.5px solid ${({theme}) => theme.accentColor};
    img {
      width:86px;
      height:86px;
    }
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
  
  const {amenities} = useSelector((state:RootState) => state.registration )
  const dispatch = useDispatch();

  const handleCheckyClick = (event:any) => {
    const {id} = event.currentTarget
    console.log(id,'asd');
    dispatch(checkAmennity(id))
  }

  const handleUnCheckClick = (event:any) => {
    const {id} = event.currentTarget
    console.log(id)
    dispatch(uncheckAmennity(id));
  }
  return (
    <AmenitieContainer>
      {DumyAmenities.map((dumy,index) => 
        amenities.filter(amenity => amenity === EngDumyAmenities[index]).length ?
          <AmenityBox id={EngDumyAmenities[index]} key={dumy} onClick={handleUnCheckClick}>
            <div className="amenity_box checked" ><img src={checkArr[index]} alt={dumy}/></div>
            <p>{dumy}</p>
          </AmenityBox>
        :
          <AmenityBox id={EngDumyAmenities[index]} key={dumy} onClick={handleCheckyClick}>
            <div className="amenity_box"><img src={arr[index]} alt={dumy}/></div>
            <p>{dumy}</p>
          </AmenityBox>
      )}
    </AmenitieContainer>
  )
}

export default AmenityForm;