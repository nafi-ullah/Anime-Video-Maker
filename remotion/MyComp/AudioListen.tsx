import { AbsoluteFill, Audio, staticFile } from 'remotion';

export const AudioListen = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile('background.mp3')} />
    </AbsoluteFill>
  );
};
