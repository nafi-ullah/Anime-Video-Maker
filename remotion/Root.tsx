import { Composition } from "remotion";


import { Gradient } from "./MyComp/Gradient"; 
import { Scene3 } from "./MyComp/Scene3";
import { Scene2 } from "./MyComp/Scene2"; 
import { Merge } from "./MyComp/Merge";
import { Story1 } from "./MyComp/Story1";
import { MergeStory } from "./MyComp/MergeStory";


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
      <Composition
				id="Scene2"
				component={Scene2}
				width={720}
				height={1280}
				durationInFrames={210}
				fps={30}
				defaultProps={{
					ranking: [
						'Rap',
						'Pop',
						'Underground\nHip Hop',
						'Alternative R&B',
						'Neo Soul',
					] as [string, string, string, string, string],
				}}
			/>
       <Composition
        id="Scene3"
        component={Scene3}
        width={720}
        height={1280}
        durationInFrames={120}
        fps={30}
        defaultProps={{
            projectName: "Remotion AI"
        }
        }
      
      />
      <Composition
        id="Merge"
        component={Merge}
        width={720}
        height={1280}
        durationInFrames={360}
        fps={30}
       
      
      />
         <Composition
        id="Story1"
        component={Story1}
        width={720}
        height={1280}
        durationInFrames={150}
        fps={30}
      />
      
      <Composition
        id="MergeStory"
        component={MergeStory}
        width={720}
        height={1280}
        durationInFrames={1050}
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
