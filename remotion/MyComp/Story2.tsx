import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { StoryImg } from "./StoryImg"; 




// overflow and position add korle circle er vitorkar jekono kisu circler vitor theke overflow hobe na.

const Title = styled.div`
  font-family: ---apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 300px;
  width: 100%;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  padding-left: 50px;
  padding-right: 50px;
`;

export const Story2: React.FC<{
  imgUrl : string;
}> = ({imgUrl}) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const progress = spring({
    frame: frame,
    fps,
    config: {
      //damping: 200, //  bounce ta bondho kore dibe
      mass: 500
    },
  });
  const progress2 = spring({
    frame: frame - 145,
    fps,
    config: {
      //damping: 200, //  bounce ta bondho kore dibe
      
    },
  });


  const coverScale = interpolate(progress, [0, 1], [1, 1.1]);
  const coverScaleOut = interpolate(progress2, [0, 1], [1.1, 2]);
 
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f4ecd0",
      }}
    >

<div
  style={{
    left: -200, // made the circle center in row
    top: 0, // made the circle center in colomn
    position: "absolute",
    transform: `scale(${coverScale}) scale(${coverScaleOut}) `,
  }}
>
    <StoryImg imgsrc={imgUrl}/>
  
</div>


     
      
    </AbsoluteFill>
  );
};