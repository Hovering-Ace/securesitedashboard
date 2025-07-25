"use client"
import React, { useEffect, useState } from 'react';
import { Camera, User, Car, AlertTriangle } from 'lucide-react';
import Timeline from './TimeLine';
import { GiCctvCamera } from "react-icons/gi";

const CameraTimeline = ({ currTime, setCurrTime, currentIncident, incidents }) => {
  const timeLabels = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00'
  ];

  // const cameras = [
  //   {
  //     id: 'Camera - 01',
  //     events: [
  //       { type: 'unauthorized', time: '02:30', label: 'Unauthorised Access' },
  //       { type: 'face', time: '06:00', label: 'Face Recognised', timestamp: '14:45' },
  //       { type: 'multiple', time: '10:30', label: '4 Multiple Events' },
  //       { type: 'unauthorized', time: '15:30', label: 'Unauthorised Access' },
  //       { type: 'threat', time: '16:00', label: 'Gun Threat' }
  //     ]
  //   },
  //   {
  //     id: 'Camera - 02',
  //     events: [
  //       { type: 'unauthorized', time: '03:00', label: 'Unauthorised Access' },
  //       { type: 'face', time: '11:30', label: 'Face Recognised' }
  //     ]
  //   },
  //   {
  //     id: 'Camera - 03',
  //     events: [
  //       { type: 'traffic', time: '07:30', label: 'Traffic congestion' },
  //       { type: 'unauthorized', time: '14:30', label: 'Unauthorised Access' }
  //     ]
  //   }
  // ];
  const[cameras,setCameras] = useState([])
  const[currCameraId,setCurrCameraId] = useState("")
  const formatIncidentsToCameras = (incidents) => {
    const cameraMap = {};

    incidents.forEach((incident) => {
      const cameraName = incident.camera.name;

      if (!cameraMap[cameraName]) {
        cameraMap[cameraName] = {
          id: cameraName,
          events: []
        };
      }

      const event = {
        type: incident.type.toLowerCase().replace(/\s/g, ''), // normalize type
        time: new Date(incident.tsStart).toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        label: incident.type,
        timestamp: new Date(incident.tsStart).toLocaleTimeString()
      };

      cameraMap[cameraName].events.push(event);
    });

    return Object.values(cameraMap);
  };

  useEffect(()=>{
    setCameras(formatIncidentsToCameras(incidents))
  },[])
  useEffect(()=>{
    cameras.length>0?setCurrCameraId(cameras[0].id):null;
  },[cameras])
  const getEventIcon = (type) => {
    switch (type) {
      case 'facerecognised':
        return <User className="w-3 h-3" />;
      case 'trafficcongestion':
        return <Car className="w-3 h-3" />;
      case 'unauthorizedaccess':
        return <AlertTriangle className="w-3 h-3" />;
      default:
        return <AlertTriangle className="w-3 h-3" />;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'unauthorizedaccess':
        return 'bg-orange-500 text-orange-100 border-orange-400';
      case 'suspiciousactivity':
        return 'bg-blue-500 text-blue-100 border-blue-400';
      case 'trafficcongestion':
        return 'bg-teal-500 text-teal-100 border-teal-400';
      case 'facerecognised':
        return 'bg-gray-500 text-gray-100 border-gray-400';
      case 'gunthreat':
        return 'bg-red-500 text-red-100 border-red-400';
      default:
        return 'bg-orange-500 text-orange-100 border-orange-400';
    }
  };

  const getTimePosition = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const maxMinutes = 16 * 60; // 16:00 max
    return (totalMinutes / maxMinutes) * 100;
  };

  return (
    <div className="bg-[#131313] mb-4 drop-shadow-md  text-white min-h-fit p-2 mt-6 w-full sm:w-[87%] lg:w-[96%] rounded-md
  flex z-10
   ">
      <div className="w-full">
        {/* Header */}
        <div
          className={`flex mb-4 sm:flex-row items-center justify-between sm:items-stretch sm:gap-4 w-full h-[50px]`}
        >

          {/* Camera list*/}
          <div className="w-fit sm:w-32 flex items-center justify-between text-center">
            <p className="text-sm sm:text-base font-semibold ml-8 mt-8 text-white truncate">
              Camera List
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex-1 h-[50px] w-full overflow-hidden ml-20  p-0">
            <div className="relative h-full min-w-[600px]">
              <Timeline currTime={currTime} setCurrTime={setCurrTime} />

            </div>
          </div>
        </div>


        {/* Camera Rows */}
        <div className="flex flex-col w-full">
          {cameras.map((camera, cameraIndex) => (
            <div
              key={cameraIndex}
              className={`relative w-full px-2 py-1 sm:py-2 ${camera.id === currCameraId
                ? 'bg-[#232323] rounded-md opacity-50'
                : 'bg-[#131313]'
                }`}
                onClick={()=>setCurrCameraId(camera.id)}
            >
              {/* Camera Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 w-full">
                {/* Camera ID */}
                <div className="w-full sm:w-32 flex items-center justify-center text-center">
                  <p className="text-lg sm:text-xs font-san text-white truncate flex gap-2"><GiCctvCamera />
                    {camera.id}
                  </p>
                </div>

                {/* Timeline Track */}
                <div className="relative flex-1 h-12 w-full overflow-x-hidden ">
                  <div className="relative h-full min-w-[600px]">
                    <div className={`absolute inset-0 ${camera.id === currCameraId
                      ? 'bg-[#232323] rounded-md opacity-50'
                      : 'bg-[#131313]'
                      }rounded`} />
                    {camera.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`absolute top-1 h-10 px-2 py-1 rounded-md border text-xs font-medium flex items-center gap-2 w-fit cursor-pointer hover:opacity-80 transition-all ${getEventColor(event.type)} overflow-hidden`}
                        style={{
                          left: `${getTimePosition(event.time)}%`,
                        }}
                      >
                        {getEventIcon(event.type)}
                        <span>{event.label}</span>
                        {/* {event.timestamp && (
                          <span className="ml-1 opacity-75">{event.timestamp}</span>
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CameraTimeline;