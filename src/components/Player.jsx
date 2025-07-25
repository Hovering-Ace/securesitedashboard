"use client"
import React, { useState } from "react";
import Clock from "./Clock"
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineReplay10 } from "react-icons/md";
import { MdForward10 } from "react-icons/md";
import { TbMultiplier1X } from "react-icons/tb";
import CameraTimeline from "./CameraTimeLine";
const Player = ({currTime,setCurrTime,cameras,currentIncident,incidents}) => {

  return (<>
    <div className="h-[44px] w-full sm:w-[87%] lg:w-[96%] text-white rounded-md
  flex items-center justify-between mt-2 z-10 bg-[#131313] drop-shadow-md 
  overflow-x-auto whitespace-nowrap mx-auto">

      <div className="flex h-full w-fit gap-6 items-center p-3 min-w-max">
        <IoPlaySkipBackOutline className="h-5 w-5" />
        <MdOutlineReplay10 className="h-5 w-5" />
        <FaRegCirclePlay className="h-[25px] w-[36px] mb-1" />
        <MdForward10 className="h-5 w-5" />
        <IoPlaySkipForwardOutline className="h-5 w-5" />
        <Clock time={currTime} className="bg-transparent" />
        <TbMultiplier1X className="h-5 w-5" />
        <img src="./assets/playBack.png" className="h-5 w-5" alt="icon" />
      </div>
    </div>

    <CameraTimeline currTime={currTime} setCurrTime={setCurrTime} cameras={cameras} currentIncident = {currentIncident} incidents = {incidents} />
  </>
  );
};

export default Player;