"use client"
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const CameraCard = ({ camera }) => {

  const img = camera.thumbnailUrl;


  return (
    <div className="w-[120px] h-[85px] bg-black text-white rounded-sm overflow-hidden shadow-sm">
      <div className="w-full h-4 flex justify-between items-center px-[2px] text-xs">
        <p>{camera.name}</p>
        <BsThreeDotsVertical className="text-sm" />
      </div>

      <img
        // src={camera.thumbnailUrl}
        src={"/thumbnails/placeholder-1.jpg"}
        alt="camera feed"
        className="w-full h-[calc(100%-1rem)] object-cover"
      />
    </div>
  );
};

export default CameraCard;