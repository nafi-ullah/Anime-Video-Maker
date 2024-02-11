import {AbsoluteFill} from 'remotion';

export const Gradient: React.FC = () => {
  return (
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, red, blue)'
      }}>
      </AbsoluteFill>
  );
};