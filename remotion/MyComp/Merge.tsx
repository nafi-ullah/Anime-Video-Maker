import { Sequence } from "remotion";
import { Scene2 } from "./Scene2";
import { Scene3 } from "./Scene3";




export const Merge: React.FC<{
 
}> = () => {


  return (
    <>
    <Sequence from={0} durationInFrames={210}>
      <Scene2 ranking={["nodejs", "react.js", "mongo", "postman", "flutter"]}/>
    </Sequence>
    <Sequence from={210} durationInFrames={150}>
      <Scene3 projectName="Nasa Project"/>
    </Sequence>
    </>
    
  );
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};