import {AbsoluteFill } from 'remotion';
import styled from 'styled-components';
import { Gradient } from './Gradient';

const CIRCLE_SIZE = 500;

const Circle = styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE/2}px;
  background-color: white;

  overflow: hidden;  
  position: absolute;
`;
// overflow and position add korle circle er vitorkar jekono kisu circler vitor theke overflow hobe na.

export const Scene3: React.FC = () => {


  return (
    <AbsoluteFill
      style= {{
        backgroundColor: '#4e00f9',
      }}
    >
      {/* Circle animation lagbe mathay rekeh design korte hobe, chhoto theke boro hoy circle */}

      <Circle>
        <Gradient height={CIRCLE_SIZE}/>
      </Circle>
     
      </AbsoluteFill>
  );
};