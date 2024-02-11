import { Composition } from "remotion";
import { Main } from "./MyComp/Main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";

import { Gradient } from "./MyComp/Gradient"; 

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Gradient"
        component={Gradient}
        width={720}
        height={1280}
        durationInFrames={120}
        fps={30}
      
      />

     

      {/* <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={540}
        height={990}
        defaultProps={defaultMyCompProps}
      /> */}
      {/* <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      /> */}
    </>
  );
};
