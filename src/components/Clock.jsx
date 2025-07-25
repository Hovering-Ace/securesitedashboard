"use client"
import React, { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";

const LiveClock = ({time}) => {
  // const [formattedTime, setFormattedTime] = useState('');

  // useEffect(() => {
  //   const updateTime = () => {
      // const now = new Date().toLocaleString('en-GB', {
      //   day: 'numeric',
      //   month: 'numeric',
      //   year: 'numeric',
      //   hour: '2-digit',
      //   minute: '2-digit',
      //   second: '2-digit',
      //   hour12: false,
      // }).replace(',', ' -');

      // setFormattedTime(now);
  //   };

  //   updateTime(); // set immediately
  //   const interval = setInterval(updateTime, 1000); // update every second

  //   return () => clearInterval(interval); // clean up on unmount
  // }, []);

  return <p className='flex items-center p-1 gap-1  bg-black w-[142px] text-xs h-[20px] rounded-md'><SlCalender />{time}</p>;
};

export default LiveClock;
