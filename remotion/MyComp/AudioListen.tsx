import { AbsoluteFill, Audio, staticFile } from 'remotion';

export const AudioListen = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile('aeshop.mp3')} />
    </AbsoluteFill>
  );
};
