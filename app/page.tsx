"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import { Tips } from "../components/Tips/Tips";
import { Spacing } from "../components/Spacing";

import { Navbar } from "../components/Dashboard components/Navbar"; 
import { InputBox } from "../components/Dashboard components/InputBox"; 

const mainscreen: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  display: "flex",
 
};

const container: React.CSSProperties = {
  maxWidth: 400,
  marginBottom: 20,

  flex: 1,
  minHeight: 0
  
  
};

const leftcontainer: React.CSSProperties = {
  width: "60%",
  height: "300px",
  display: "inline-block",
  
  
};

const containerbox: React.CSSProperties = {
  width: "600",
};






const outer: React.CSSProperties = {
  borderRadius: "var(--geist-border-radius)",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  marginBottom: 40,
  marginTop: 60,
  
};

const player: React.CSSProperties = {
  width: "100%",
};

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="w-screen h-screen">
      <div>
      <Navbar></Navbar>
      </div>
      
      <div className="w-screen h-screen flex">
        <div className="w-3/5 h-screen bg-slate-500 p-24 text-7xl font-bold">
          AI Reels Generator
          <div>
            <InputBox></InputBox>
          </div>
        </div>
        
        <div className="w-2/5 h-screen bg-red-500">

        <div style={container}>
        <div className="cinematics" style={outer}>
          
          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={990}
            compositionWidth={540}
            style={player}
            controls
            autoPlay
            loop
          />
        </div>
        
        
      </div> 

        </div>

        </div>
      
        {/* <div className="w-[1200px] h-[800px] text-3xl font-bold underline inline-block">
      Hello world!
    </div>
     
         
       */}
      
    </div>
  );
};

export default Home;
