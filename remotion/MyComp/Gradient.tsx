import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const Gradient: React.FC<{
  height: number
}> = ({height}) => {
  if(!height){
    height = 500;
  }

  const frame = useCurrentFrame(); // get current frame
  //const {height} = useVideoConfig(); // get height of the composition
  const duration = 4 * 30; // 4 sec to spent through the whole gradient
  const offset = height * 2 * (frame/duration);

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{
        
        height: height * 1.5, // normal height er ektu beshi height jeno ektu pore seta normal a transform hoy, etai animation
        background: 'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
        transform: `translateY(-${offset}px)`,
      }}/>

    <AbsoluteFill style={{
        
        height: height * 1.5, // normal height er ektu beshi height jeno ektu pore seta normal a transform hoy, etai animation
        top: height * 1.5 -1, // -1 cz ek frame theke arek frame a jaite ekta daag pore gese // left , top, right egula hocche margin
        background: 'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
        transform: `translateY(-${offset}px)`,
      }}/>
      </AbsoluteFill>
  );
};