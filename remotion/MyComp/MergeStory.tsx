import { Sequence } from "remotion";
import { Story2 } from "./Story2";
import story1 from './assets/story1.jpeg';
import story3 from './assets/story3.jpeg';
import { AudioListen } from "./AudioListen";


export const MergeStory: React.FC<{
 
}> = () => {


  return (
    <>
    <Sequence from={0} durationInFrames={150}>
      <Story2 imgUrl={story1} />
    </Sequence>
    <Sequence from={150} durationInFrames={150}>
       <Story2 imgUrl={story3}/>
    </Sequence>
    <Sequence from={0} durationInFrames={300}>
       <AudioListen></AudioListen>
    </Sequence>
    </>
    
  );
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};