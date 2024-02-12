import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { StoryImg } from "./StoryImg"; 
import story1 from './assets/story1.jpeg';

const imageUrl = './assets/story1.jpeg';



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

export const Story1: React.FC<{
  
}> = () => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const progress = spring({
    frame: frame + 2,
    fps,
    config: {
      //damping: 200, //  bounce ta bondho kore dibe
      mass: 500
    },
  });
  const progress2 = spring({
    frame: frame - 140,
    fps,
    config: {
      //damping: 200, //  bounce ta bondho kore dibe
      
    },
  });

  const scale = interpolate(progress, [0, 1], [4, 1]); // boro chhoto howar animation // to calculate the states between [0,1] and [4,1] of framing
  //(value that drives the annimation == frame ==current time, [0,50] == duration , [0,1] == opacity)
  // const opacity = interpolate(,,,,)
  // return(
  //   <div style = {{opacity}}></div>
  // );

  // ekhon ami chacchi photo tao animate hok
  const coverOpacity = interpolate(progress, [0.5, 1], [0, 1]);
  const coverScale = interpolate(progress, [0, 1], [1, 1.1]);
  const coverScaleOut = interpolate(progress2, [0, 1], [1.1, 2]);

  //show korar por upore chole jabe:
  const UPSTART = 60;

  const upAnimation = spring({
    frame: frame - UPSTART, // kotokkhon por animation start hobe // frame 60 er time a ei animation start hobe
    fps,
    // config: {
    //   damping: 200,
    // },
  });
  const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);
  const TextOpacity = spring({
		frame: frame - 20,
		fps,
		config: {
			mass: 0.45,  // faster korte chaile mass decrease korte hoy, r slower korte mass baraite hobe
		},
	});


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
  
  
</div>
<Title style={{opacity: TextOpacity}}>
					If you want to win  <br /> you can do it all
				</Title>


     
      
    </AbsoluteFill>
  );
};