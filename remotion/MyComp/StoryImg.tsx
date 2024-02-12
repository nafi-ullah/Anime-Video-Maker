
import story1 from './assets/story1.jpeg';
import styled from 'styled-components';
import {  Img , staticFile } from "remotion";

const COVER_SIZE = 1480;

const Cover = styled.div`
    height: ${COVER_SIZE}px;
    box-shadow: 0 0 8px black;
   
`;


export const StoryImg: React.FC<{
  imgsrc : string
}> = ({imgsrc}) => {


  return <img src={imgsrc} style={{height: COVER_SIZE }}/>;
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};