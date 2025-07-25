"use client"
import React, { useRef, useState, useEffect } from 'react';

const Timeline = ({ currTime, setCurrTime }) => {
  const timelineWidth = 1200; // px for 24 hours, 100px per hour
  const tickSpacing = 100 / 24; // 5 minutes per tick = 12 per hour
  const totalTicks = 24 * 12;
  const [scrubX, setScrubX] = useState(0);
  // const [currentTime, setCurrentTime] = useState(currTime);
  const timelineRef = useRef(null);
  const isDragging = useRef(false);

  const getTimeFromPosition = (x) => {
    const totalSeconds = Math.round((x / timelineWidth) * 86400); // 24 * 60 * 60
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const getScrubXFromTime = (timeStr) => {
    console.log(timeStr);
    const [h, m, s] = timeStr.split(":").map(Number);
    const totalSeconds = h * 3600 + m * 60 + s;
    console.log(totalSeconds)
    return (totalSeconds / 86400) * timelineWidth;
  };



  const updateScrubber = (x) => {
    const clamped = Math.max(0, Math.min(x, timelineWidth));
    setScrubX(clamped);
    // setCurrentTime(getTimeFromPosition(clamped));
    setCurrTime(currTime.split("-")[0] + " - " + getTimeFromPosition(clamped));
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    updateScrubber(x);
  };

  useEffect(() => {
    setScrubX(getScrubXFromTime(currTime.split("-")[1]))
    const stopDrag = () => (isDragging.current = false);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    setScrubX(getScrubXFromTime(currTime.split("-")[1]))
  }, [currTime]);

  return (
    <div className="w-fit  overflow-x-hidden p-2 bg-transparent ">
      <div
        ref={timelineRef}
        className="relative mx-auto"
        style={{ width: `${timelineWidth}px`, height: '50px' }}
        onClick={(e) => {
          const rect = timelineRef.current.getBoundingClientRect();
          updateScrubber(e.clientX - rect.left);
        }}
      >
        {/* Ticks and labels */}
        {Array.from({ length: totalTicks }).map((_, i) => {
          const isHour = i % 12 === 0;
          const left = i * tickSpacing;
          return (
            <div
              key={i}
              className="absolute scroll-hide"
              style={{ left: `${left}px`, bottom: 0 }}
            >
              <div
                className={`w-[1px] ${isHour ? 'h-6 bg-white' : 'h-3 bg-gray-400'}`}
              />
              {isHour && (
                <div className="text-white text-[10px] absolute -top-3 -left-5 w-12 text-center font-mono z-10">
                  {`${String(i / 12).padStart(2, '0')}:00`}
                </div>
              )}
            </div>
          );
        })}

        {/* Scrubber */}
        <div
          className="absolute h-full overflow-hidden flex flex-col items-center cursor-pointer"
          style={{ left: `${scrubX}px`, transform: 'translateX(-50%)' }}
          onMouseDown={() => (isDragging.current = true)}
        >
          <div className="text-xs bg-yellow-400 font-mono text-black px-1 rounded">
            {currTime.split("-")[1]}
          </div>
          <div className="w-0.5 min-h-[30px] bg-yellow-400 mt-1 z-11" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
