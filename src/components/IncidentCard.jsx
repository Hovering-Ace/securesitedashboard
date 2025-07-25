"use client"
import React from "react";
import { CctvIcon, DoorOpen } from 'lucide-react';
import { FaGun } from "react-icons/fa6";
import { LuUserSearch } from "react-icons/lu";
import { BiSolidTraffic } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { LuClock } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const threatIcons = {
    "Unauthorised Access": <DoorOpen className="w-5 h-5 text-yellow-500" />,
    "Gun Threat": <FaGun className="w-5 h-5 text-red-600" />,
    "Face Recognised": <LuUserSearch className="w-5 h-5 text-blue-500" />,
    "Traffic Congestion": <BiSolidTraffic className="w-5 h-5 text-orange-500" />,
    "Suspicious Activity": <FaUserSecret className="w-5 h-5 text-purple-500" />,
};


const IncidentCard = ({ incident, setCurrentIncident,fetchIncidents }) => {
    const icon = threatIcons[incident.type];
    function formatIncidentTime(tsStart, tsEnd) {
        const start = new Date(tsStart);
        const end = new Date(tsEnd);

        const pad = (n) => String(n).padStart(2, "0");

        const startTime = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
        const endTime = `${pad(end.getHours())}:${pad(end.getMinutes())}`;

        const day = start.getDate();
        const monthShort = start.toLocaleString('en-US', { month: 'short' });
        const year = start.getFullYear();

        return `${startTime} - ${endTime} on ${day}-${monthShort}-${year}`;
    }

    const handleResolve = () => {
        try{
            fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/incidents/${incident.id}/resolve`, {
                method: 'PATCH',
                body: JSON.stringify({
                    resolved: !incident.resolved,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json())
            .then((json) => {alert("Resolved Successfully");fetchIncidents()});
            
        }
        catch(e){
            console.log(e)
            alert("Cannot Resolve")
        }
    }

    const type = incident.type;
    const img = incident.thumbnailUrl;

    return (
        <div className="flex items-center justify-between m-4" onClick={() => setCurrentIncident(incident)}>
            <div className="flex gap-8">
                <img src={img} alt="" className="h-[68px] w-[120px] rounded-md" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        {icon}
                        <h2 className="text-sm font-semibold">{incident.type}</h2>
                    </div>
                    <span className=" flex flex-col">
                        <p className="flex items-center gap-2 text-xs"><GiCctvCamera />{incident.camera.location}</p>
                        <p className="flex items-center gap-2 text-xs font-medium"><LuClock />{formatIncidentTime(incident.tsStart, incident.tsEnd)}</p>
                    </span>
                </div>
            </div>
            {incident.resolved?<button className="flex items-center gap-2 text-s font-medium text-green-500 cursor-pointer" onClick={handleResolve} >Resolved <IoIosArrowForward className="h-4 w-4" /></button>:<button className="flex items-center gap-2 text-s font-medium text-yellow-500 cursor-pointer" onClick={handleResolve} >Resolve <IoIosArrowForward className="h-4 w-4" /></button>}
        </div>
    );
};

export default IncidentCard;