import { Sequence } from "remotion";
import { Story2 } from "./Story2";
import { AudioListen } from "./AudioListen";

import story1 from './assets/story1.jpeg';
import story2 from './assets/story2.jpeg';
import story3 from './assets/story3.jpeg';
import story4 from './assets/story4.jpeg';
import story5 from './assets/story5.jpeg';
import story6 from './assets/story6.jpeg';
import story7 from './assets/story7.jpeg';

export const storyImages = [story1, story2, story3, story4, story5, story6, story7];
//export const storyImages = ["story1.jpeg", "story2.jpeg", "story3.jpeg", "story4.jpeg", "story5.jpeg", "story6.jpeg", "story7.jpeg"];

export const storySentences: string[] = [
  "A BAT who fell upon the ground and was caught by a Weasel pleaded to be spared his life.",
  "The Weasel refused, saying that he was by nature the enemy of all birds.",
  "The Bat assured him that he was not a bird, but a mouse, and thus was set free.",
  "Shortly afterwards the Bat again fell to the ground and was caught by another Weasel",
  "The Weasel said that he had a special hostility to mice.",
  "The Bat assured him that he was not a mouse,",
  "but a bat, and thus a second time escaped."
];

export const duration = [0, 150, 300, 450, 600, 750, 900];


export const MergeStory: React.FC<{
 
}> = () => {


  return (
    <>
    {storyImages.map((imgUrl, index) => (

      <Sequence from={duration[index]} durationInFrames={150}>
        <Story2 imgUrl={imgUrl} sentence={storySentences[index]} />

        </Sequence>
      ))}
    

    {/* <Sequence from={0} durationInFrames={150}>
      <Story2 imgUrl={storyImages[0]} sentence={storySentences[0]}/>
    </Sequence>
    <Sequence from={150} durationInFrames={150}>
    <Story2 imgUrl={storyImages[1]} sentence={storySentences[1]}/>
    </Sequence>
    <Sequence from={300} durationInFrames={150}>
    <Story2 imgUrl={storyImages[2]} sentence={storySentences[2]}/>
    </Sequence>
    <Sequence from={450} durationInFrames={150}>
    <Story2 imgUrl={storyImages[3]} sentence={storySentences[3]}/>
    </Sequence>
    <Sequence from={600} durationInFrames={150}>
    <Story2 imgUrl={storyImages[4]} sentence={storySentences[4]}/>
    </Sequence>
    <Sequence from={750} durationInFrames={150}>
    <Story2 imgUrl={storyImages[5]} sentence={storySentences[5]}/>
    </Sequence>
    <Sequence from={900} durationInFrames={150}>
    <Story2 imgUrl={storyImages[6]} sentence={storySentences[6]}/>
    </Sequence> */}
    
    <Sequence from={0} durationInFrames={1050}>
       <AudioListen></AudioListen>
    </Sequence>
    </>
    
  );
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};