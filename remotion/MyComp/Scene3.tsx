import {AbsoluteFill } from 'remotion';
import styled from 'styled-components';

const Circle = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 250px;
  background-color: white;
`;


export const Scene3: React.FC = () => {


  return (
    <AbsoluteFill
      style= {{
        backgroundColor: '#4e00f9',
      }}
    >
      {/* Circle animation lagbe mathay rekeh design korte hobe, chhoto theke boro hoy circle */}

      <Circle></Circle>
     
      </AbsoluteFill>
  );
};