import React, { useState } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";

const Dchild = ({ setDashboard }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-gradient-to-tr from-gray-800 to-gray-900/90 border-2 h-[15rem] w-[70rem] mt-10 rounded-xl ">
        <div className=" border-4 border-gray-50/80 w-[68rem] h-[13rem] rounded-xl relative left-3.5 top-3">
          <marquee behavior="Left" direction="">
            <span className=" text-yellow-100 text-sm del ">
              Welcome 'Stine Zn'... We are delighted to have you back onboard.
            </span>
          </marquee>

          <div className=" flex items-center gap-3 ml-10  ">
            <img
              src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-628.jpg?size
            =626&ext=jpg&uid=R169605067&ga=GA1.1.561625636.1729514440&semt=ais_hybrid"
              alt=""
              className="h[3rem] w-[3rem] rounded-full "
            />

            <div>
              <span className=" font-semibold text-white text-2xl">
                Welcome User
              </span>
              <p className=" text-gray-50/90 animate-bounce">Dev. Stine Zn..</p>

              <div className=" flex absolute right-10 text-white top-11">
                <p className=" text-xl">
                  <span className=" bg-gray-300/90 rounded p-1">Bal:</span>{" "}
                  $1000. <span className=" text-sm">00</span>
                </p>
              </div>

              <div className=" flex gap-10 items-center justify-center absolute bottom-6 right-10 ">
                <button className="bg-slate-500/80 h-[3rem] w-[3rem] rounded flex justify-center items-center hover:bg-gray-300/70 ">
                  <IoHomeOutline className=" text-white text-3xl " />
                </button>
                <button className="bg-slate-500/80 h-[3rem] w-[3rem] rounded flex justify-center items-center hover:bg-gray-300/70 ">
                  <BsFillSendCheckFill className=" text-white text-3xl" />
                </button>
                <button className="bg-slate-500/80 h-[3rem] w-[3rem] rounded flex justify-center items-center hover:bg-gray-300/70">
                  <BiMoneyWithdraw className=" text-white text-3xl" />
                </button>
                <button className="bg-slate-500/80 h-[3rem] w-[3rem] rounded flex justify-center items-center hover:bg-gray-300/70 ">
                  <IoSettingsOutline className=" text-white text-3xl" />
                </button>
              </div>
            </div>
            <div className=" h-[5rem] w-[25rem] border-2 border-gray-700 ml-14"></div>
          </div>
        </div>
        <div className=" flex ">
          <div className=" h-[5rem] w-[30rem] border-2 border-gray-700 absolute top-72 bg-gray-700 rounded">
            <div className=" h-[4rem] w-[29rem] border-2 border-gray-50 relative top-1.5 left-2 rounded">
              <span
                className=" relative top-4 rounded ml-3 text-black p-1 animate-pulse animate-text 
          bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"
              >
                Invite 2 friends and earn $4 instantly{" "}
              </span>
            </div>
          </div>

          <div className=" h-[5rem] w-[30rem] border-2 border-gray-700 absolute top-72 right-[18.5rem] bg-gray-700 rounded">
            <div className=" h-[4rem] w-[29rem] border-2 border-gray-50 relative top-1.5 left-2 rounded">
              <button
                onClick={() => setDashboard(false)}
                className=" bg-blue-800 text-white h-[2.5rem] w-[5.5rem] 
              rounded absolute right-0 top-3 mr-10 hover:bg-blue-600/80"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dchild;
