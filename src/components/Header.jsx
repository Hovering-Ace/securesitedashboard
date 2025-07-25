import React from "react";
// import logo from "./assets/logo.png"
// import profile from "./assets/profile.png"
import { MdDashboard } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
//<MdDashboard /><GiCctvCamera /><MdSettingsApplications /><CgDanger /><HiUsers />
const Header = () => {
    return (
        <div
            className="width-full h-[76px] text-white
     flex flex-row items-center justify-between p-4 border-b-2 border-gray-500 relative ">

            <img src="/assets/logo.png" alt="" className="w-[120px] h-[26px]" />

            <div
                className="absolute h-[100px] w-[50%] left-1/2 -translate-x-1/2 z-0 blur-3xl"
                style={{
                    background: 'radial-gradient(ellipse at center, #FFCC00 0%, transparent 80%)',
                }}
            ></div>

            <div className="flex flex-row gap-4 font-semibold relative z-10">
                <div className="flex flex-row items-center justify-between gap-2 hover:text-amber-400 cursor-pointer "><MdDashboard /> Dashboard</div>
                <div className="flex flex-row items-center justify-between gap-2 hover:text-amber-400 cursor-pointer"><GiCctvCamera />Cameras</div>

                <div className="flex flex-row items-center justify-between hover:text-amber-400 cursor-pointer gap-2"><MdSettingsApplications />Scenes</div>
                <div className="flex flex-row items-center justify-between hover:text-amber-400 cursor-pointer gap-2"><CgDanger />Incidents</div>
                <div className="flex flex-row items-center justify-between hover:text-amber-400 cursor-pointer gap-2"><HiUsers /> Users</div>

            </div>



            <div className="flex flex-row items-center justify-between gap-4">
                <div >
                    <img src="/assets/profile.png" alt="profile Image" className="h-10 w-10" />
                </div>
                <div>
                    <h2 className="font-bold">Mohammed Ajhas</h2>
                    <span >ajhas@mandlac.com</span>
                </div>
                <button><RiArrowDropDownLine className="h-8 w-8" /></button>
            </div>

        </div>
    );
};

export default Header;