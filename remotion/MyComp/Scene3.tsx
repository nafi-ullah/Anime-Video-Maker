import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { Gradient } from './Gradient';
import { Album } from './Album';


const CIRCLE_SIZE = 500;

const Circle = styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE/2}px;

  overflow: hidden;  
  position: absolute;
`;
// overflow and position add korle circle er vitorkar jekono kisu circler vitor theke overflow hobe na.

export const Scene3: React.FC = () => {
      const frame = useCurrentFrame(); 
      const { width, height, fps } = useVideoConfig();
      const progress = spring({
            frame,
            fps,
            config:{
              damping: 200, //  bounce ta bondho kore dibe
            }
      });

      const scale = interpolate(progress, [0,1], [4,1]); // boro chhoto howar animation // to calculate the states between [0,1] and [4,1] of framing
                              //(value that drives the annimation == frame ==current time, [0,50] == duration , [0,1] == opacity)
                              // const opacity = interpolate(,,,,)  
                              // return(
                              //   <div style = {{opacity}}></div>
                              // );
  return (
    <AbsoluteFill
      style= {{
        backgroundColor: '#4e00f9',
      }}
    >
      {/* Circle animation lagbe mathay rekeh design korte hobe, chhoto theke boro hoy circle */}

      <Circle
        style={{
          opacity: progress,
          left: width /2 - CIRCLE_SIZE /2 ,      // made the circle center in row
          top: height / 2 - CIRCLE_SIZE /2 + 100,  // made the circle center in colomn
          transform: `scale(${scale})`
        }}
      >
        <Gradient height={CIRCLE_SIZE}/>
      </Circle>
        <div
          style={{
            left: width /2 - CIRCLE_SIZE /2 ,      // made the circle center in row
            top: height / 2 - CIRCLE_SIZE /2 + 150,  // made the circle center in colomn
            position: 'absolute'
          }}
        >

        <Album />
        </div>

          
      
       
      </AbsoluteFill>
  );
};