import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { Gradient } from "./Gradient";
import { Album } from "./Album";

const CIRCLE_SIZE = 500;

const Circle = styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;

  overflow: hidden;
  position: absolute;
`;
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

export const Scene3: React.FC<{
  projectName : string
}> = ({projectName}) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200, //  bounce ta bondho kore dibe
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
  const coverScale = interpolate(progress, [0.6, 1], [0.7, 1]);

  //show korar por upore chole jabe:
  const UPSTART = 60;

  const upAnimation = spring({
    frame: frame - UPSTART, // kotokkhon por animation start hobe // frame 60 er time a ei animation start hobe
    fps,
    config: {
      damping: 200,
    },
  });
  const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

 // uporar text er animation
  const textOpacity = (() => {
		if (frame < UPSTART) {
			return interpolate(progress, [0.9, 1], [0, 1]);
		}
		return interpolate(upAnimation, [0, 1], [1, 0]);
	})();

  //nicher text er animation

	const bottomTextOpacity = spring({
		frame: frame - UPSTART - 15,
		fps,
		config: {
			mass: 0.45,  // faster korte chaile mass decrease korte hoy, r slower korte mass baraite hobe
		},
	});

	const artistTextopacity = spring({
		frame: frame - UPSTART - 43, // joto komabe toto pore animation ta start hobe. mane omuk no frame a suru hobe, eta initial value
		fps,
		config: {
			mass: 0.45,
		},
	});

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#4e00f9",
      }}
    >

      <AbsoluteFill style={{transform: `translateY(${contentTranslation}px)`}}>
      <Title style={{opacity: textOpacity}}>
					If you want to win  <br /> you can do it all
				</Title>
				<Title style={{top: 1030, fontSize: 25, opacity: artistTextopacity}}>
					CSE Carnival Winners
				</Title>
				<Title
					style={{
						top: 1100,
						fontSize: 40,
						opacity: bottomTextOpacity,
					}}
				>
					Your top project of the year is {projectName}.
				</Title>

{/* Circle animation lagbe mathay rekeh design korte hobe, chhoto theke boro hoy circle */}

<Circle
  style={{
    opacity: progress,
    left: width / 2 - CIRCLE_SIZE / 2, // made the circle center in row
    top: height / 2 - CIRCLE_SIZE / 2 + 100, // made the circle center in colomn
    transform: `scale(${scale})`,
  }}
>
  <Gradient height={CIRCLE_SIZE} />
</Circle>
<div
  style={{
    left: width / 2 - CIRCLE_SIZE / 2, // made the circle center in row
    top: height / 2 - CIRCLE_SIZE / 2 + 150, // made the circle center in colomn
    position: "absolute",
    opacity: coverOpacity,
    transform: `scale(${coverScale})`,
  }}
>
<Album />
  
</div>


      </AbsoluteFill>
      
    </AbsoluteFill>
  );
};