"use client"
import React, { useEffect, useState } from "react";
// import img from "./assets/thumbnail.png"
// import img2 from "./assets/img2.jpeg"
import CameraCard from "./CameraCard";
import { BsRecord2 } from "react-icons/bs";
import LiveClock from "./Clock";
// import threat from "./assets/threat.png"
// import logos from "./assets/logos.png"
import IncidentCard from "./IncidentCard";

import { CheckCheck } from 'lucide-react';
import Player from "./Player";
// const cameras = [
//     {
//         id: 'cmdg77phw000029uu51uefagi',
//         name: 'Shop Floor A',
//         location: 'Production Area A',
//         createdAt: new Date('2025-07-23T16:49:16.245Z'),
//         thumbnailUrl: "./assets/thumbnail.png",
//     },
//     {
//         id: 'cmdg77phx000129uu7xs3ndg6',
//         name: 'Vault Camera',
//         location: 'Main Vault',
//         createdAt: new Date('2025-07-23T16:49:16.245Z'),
//         thumbnailUrl: "./assets/thumbnail.png",
//     },
//     {
//         id: 'cmdg77phy000329uub6y0jn7y',
//         name: 'Entrance Alpha',
//         location: 'Building Entrance',
//         createdAt: new Date('2025-07-23T16:49:16.245Z'),
//         thumbnailUrl: "./assets/thumbnail.png"
//     },
//     {
//         id: 'cmdg77phx000229uuj1cj9a4a',
//         name: 'Parking Lot',
//         location: 'External Parking',
//         createdAt: new Date('2025-07-23T16:49:16.245Z'),
//         thumbnailUrl: "./assets/thumbnail.png",
//     },
// // ];

// const incidents = [
//     {
//         id: 'cmdg77pjy000529uupq0i3n3w',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Suspicious Activity',
//         tsStart: new Date('2025-07-23T02:40:57.499Z'),
//         tsEnd: new Date('2025-07-23T02:42:57.499Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.318Z')
//     },
//     {
//         id: 'cmdg77pkc000729uu133d1lqg',
//         cameraId: 'cmdg77phx000229uuj1cj9a4a',
//         type: 'Traffic Congestion',
//         tsStart: new Date('2025-07-22T19:51:02.079Z'),
//         tsEnd: new Date('2025-07-22T19:53:02.079Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.332Z')
//     },
//     {
//         id: 'cmdg77pkr000929uu47d4y2k6',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Face Recognised',
//         tsStart: new Date('2025-07-23T04:02:28.965Z'),
//         tsEnd: new Date('2025-07-23T04:05:28.965Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.347Z')
//     },
//     {
//         id: 'cmdg77pl7000b29uue8bqc5fq',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Face Recognised',
//         tsStart: new Date('2025-07-23T10:38:04.314Z'),
//         tsEnd: new Date('2025-07-23T10:40:04.314Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.363Z')
//     },
//     {
//         id: 'cmdg77plj000d29uuvzsixmk3',
//         cameraId: 'cmdg77phx000229uuj1cj9a4a',
//         type: 'Face Recognised',
//         tsStart: new Date('2025-07-22T23:37:14.788Z'),
//         tsEnd: new Date('2025-07-22T23:39:14.788Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.375Z')
//     },
//     {
//         id: 'cmdg77plv000f29uuxqbsi0up',
//         cameraId: 'cmdg77phx000229uuj1cj9a4a',
//         type: 'Gun Threat',
//         tsStart: new Date('2025-07-23T09:38:48.260Z'),
//         tsEnd: new Date('2025-07-23T09:41:48.260Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.387Z')
//     },
//     {
//         id: 'cmdg77pm8000h29uu12moh81j',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Suspicious Activity',
//         tsStart: new Date('2025-07-23T14:35:44.493Z'),
//         tsEnd: new Date('2025-07-23T14:37:44.493Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.400Z')
//     },
//     {
//         id: 'cmdg77pmo000j29uupqv7jm6z',
//         cameraId: 'cmdg77phx000229uuj1cj9a4a',
//         type: 'Suspicious Activity',
//         tsStart: new Date('2025-07-23T02:59:55.309Z'),
//         tsEnd: new Date('2025-07-23T03:01:55.309Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.416Z')
//     },
//     {
//         id: 'cmdg77pn1000l29uujfw4sjmt',
//         cameraId: 'cmdg77phx000129uu7xs3ndg6',
//         type: 'Traffic Congestion',
//         tsStart: new Date('2025-07-22T20:52:33.418Z'),
//         tsEnd: new Date('2025-07-22T20:55:33.418Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.429Z')
//     },
//     {
//         id: 'cmdg77pnf000n29uujg0kh9ke',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Suspicious Activity',
//         tsStart: new Date('2025-07-22T23:33:10.652Z'),
//         tsEnd: new Date('2025-07-22T23:35:10.652Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.443Z')
//     },
//     {
//         id: 'cmdg77pnr000p29uurgjwy7kn',
//         cameraId: 'cmdg77phy000329uub6y0jn7y',
//         type: 'Unauthorised Access',
//         tsStart: new Date('2025-07-23T01:11:33.934Z'),
//         tsEnd: new Date('2025-07-23T01:14:33.934Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.456Z')
//     },
//     {
//         id: 'cmdg77po3000r29uuymzw8jxa',
//         cameraId: 'cmdg77phy000329uub6y0jn7y',
//         type: 'Unauthorised Access',
//         tsStart: new Date('2025-07-22T21:05:07.897Z'),
//         tsEnd: new Date('2025-07-22T21:08:07.897Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.467Z')
//     },
//     {
//         id: 'cmdg77pof000t29uu8xatugc0',
//         cameraId: 'cmdg77phy000329uub6y0jn7y',
//         type: 'Face Recognised',
//         tsStart: new Date('2025-07-23T01:44:30.680Z'),
//         tsEnd: new Date('2025-07-23T01:47:30.680Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.479Z')
//     },
//     {
//         id: 'cmdg77pos000v29uun5xsd23f',
//         cameraId: 'cmdg77phw000029uu51uefagi',
//         type: 'Traffic Congestion',
//         tsStart: new Date('2025-07-22T22:27:28.435Z'),
//         tsEnd: new Date('2025-07-22T22:29:28.435Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.492Z')
//     },
//     {
//         id: 'cmdg77pp4000x29uuwzgr30i5',
//         camera: {id:'cmdg77phw000029uu51uefagi',name:"Camera 5",location:""},
//         type: 'Suspicious Activity',
//         tsStart: new Date('2025-07-23T05:16:46.869Z'),
//         tsEnd: new Date('2025-07-23T05:19:46.869Z'),
//         thumbnailUrl: "./assets/img2.jpeg",
//         resolved: false,
//         createdAt: new Date('2025-07-23T16:49:16.504Z')
//     }
// ];


const IncidentSection = () => {

    // const resolvedCount = incidents.filter(incident => incident.resolved).length;
    // const unresolvedCount = incidents.filter(incident => !incident.resolved).length;
    const [resolvedCount, setResolvedCount] = useState(0)
    const [unresolvedCount, setUnResolvedCount] = useState(0)
    const [currTime, setCurrTime] = useState(new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).replace(',', ' -'))
    const [incidents, setIncidents] = useState([])
    const [cameras, setCameras] = useState([])
    const [currentIncident, setCurrentIncident] = useState();

    const updateTime = () => {

    }

    function updateByOneSec(dateStr) {
        const [datePart, timePart] = dateStr.split(' - ');
        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes, seconds] = timePart.split(':').map(Number);

        let currentDate = new Date(year, month - 1, day, hours, minutes, seconds);

        return currentDate.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(',', ' -');
    }
    const fetchIncidents = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/incidents`);
        const data = await response.json();
        setIncidents(data);
        const { resolved, unresolved } = data.reduce(
            (acc, incident) => {
                if (incident.resolved) {
                    acc.resolved += 1;
                } else {
                    acc.unresolved += 1;
                }
                return acc;
            },
            { resolved: 0, unresolved: 0 }
        );
        console.log(resolved, unresolved)
        setResolvedCount(resolved);
        setUnResolvedCount(unresolved);
        if (data.length > 0) {
            setCurrentIncident(data[0])
            setCurrTime(new Date(data[0].tsStart).toLocaleString('en-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).replace(',', ' -'))
            const uniqueCameras = Array.from(
                new Map(
                    data.map(incident => [incident.camera.id, incident.camera])
                ).values())

            console.log("Camera", uniqueCameras)
            setCameras(uniqueCameras);

        }
    }
    useEffect(() => {
        let interval;
        fetchIncidents()
    }, [])

    useEffect(() => {
        console.log(currentIncident)
        currentIncident ? setCurrTime(new Date(currentIncident.tsStart).toLocaleString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(',', ' -')) : null
    }, [currentIncident])

    return (
        <>
            {currentIncident ? <>
                <div className="w-full text-white flex flex-wrap justify-center gap-6 p-4 h-full mt-2 z-10">

                    {/* Left: Camera Feed */}
                    <div className="relative h-[300px] sm:h-[380px] lg:h-[450px] w-full sm:w-[90%] lg:w-[60%] drop-shadow-md">
                        <img src={currentIncident.thumbnailUrl} alt="Camera feed" className="h-full w-full rounded-md object-cover" />

                        {/* Top-left Clock and Camera ID */}
                        <div className="flex flex-col justify-between absolute top-0 left-0 p-2 h-full">
                            <div><LiveClock time={currTime} /></div>
                            <span className="flex items-center justify-center gap-1 p-1 rounded-md bg-black h-[24px] w-fit">
                                <BsRecord2 className="text-red-800 h-5 w-5" />
                                {currentIncident.camera.name}
                            </span>
                        </div>

                        {/* Bottom-right small cameras */}
                        <div className="flex flex-row gap-3 absolute bottom-1 right-1 mb-1 mr-2">
                            {cameras.filter(camera => camera.id != currentIncident.camera.id).map((camera, index) => (
                                <CameraCard key={index} camera={camera} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Incident Feed */}
                    <div className="w-full sm:w-[90%] lg:w-[36%] h-[300px] sm:h-[380px] lg:h-[450px] bg-[#131313] drop-shadow-md rounded-md">
                        <div className="flex items-center justify-between p-2">
                            <p className="flex items-center gap-2 font-semibold text-md">
                                <img src="./assets/threat.png" alt="" className="h-[24px] w-[24px]" />
                                {unresolvedCount} Unresolved Incidents
                            </p>

                            <div className="flex gap-3 items-center">
                                <img src="./assets/logos.png" alt="" className="h-[20px] w-[52px]" />
                                <span className="flex items-center gap-[2px] text-xs bg-black rounded-full p-[2px] w-[150px]">
                                    <CheckCheck className={resolvedCount>0?"text-green-400":""} /> {resolvedCount} Resolved Incidents
                                </span>
                            </div>
                        </div>

                        <div className="overflow-y-auto max-h-[400px] px-2">
                            {incidents.map((incident, index) => (
                                incident.resolved?null:
                                <IncidentCard
                                    key={index}
                                    incident={incident}
                                    // location={location}
                                    setCurrentIncident={setCurrentIncident}
                                    fetchIncidents={fetchIncidents}
                                />

                            ))}
                        </div>
                    </div>
                </div>


                <Player currTime={currTime} setCurrTime={setCurrTime} cameras={cameras} currentIncident={currentIncident} incidents={incidents} />
            </>
                : <p>Fetching</p>}
        </>
    );
};

export default IncidentSection;