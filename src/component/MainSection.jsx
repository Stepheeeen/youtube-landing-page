import React from 'react'
import guy from ".././assets/guy.png";


const MainSection = () => {
  return (
    <div className="flex justify-center items-center bg-blue-50">
      <div className="">
        <h1 className="bg-blue-500 text-white text-[20px] w-fit p-2 rounded-md">
          Google Partner
        </h1>
        <h1 className="text-[70px] font-bold">
          We promote your
          <br /> <span className="text-blue-500">YouTube</span> channel
        </h1>
        <p className="text-2xl text-[#5C5C5C]">
          Get new and interested subscribers. We use
          <br /> YouTube Ads only. Start as low as $49 per week
        </p>
        <div className="flex justify-between rounded-md border-[2px] w-[280px] md:w-full h-[50px]  mt-5 bg-white border-blue-500">
          <input
            className="w-[300px]"
            type="email"
            placeholder="Enter your youtube channel URL"
          />
          <button className="bg-blue-500 rounded-md text-white">
            <p className="p-2">Start your youtube version</p>
          </button>
        </div>
        <p className="text-[#1090CB] mt-2 cursor-pointer">
          or sign in with YouTube
        </p>
      </div>
      <div>
        <img className="" src={guy} alt="guy shape" />
      </div>
    </div>
  );
}

export default MainSection