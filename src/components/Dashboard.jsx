import React from "react";
import IncidentSection from "./IncidentSection";
import Player from "./Player";
import CameraTimeline from "./CameraTimeLine";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center ">
        <IncidentSection/>
        {/* <Player/> */}
        {/* <CameraTimeline/> */}
    </div>
  );
};
export default Dashboard;