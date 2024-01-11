import React from 'react'
import guy from ".././assets/guy.png";


const MainSection = () => {
  return (
    <div className="flex justify-center items-center bg-blue-50">
      <div className="">
        {/* <h1 className="bg-blue-500 text-white text-[20px] w-fit p-2 rounded-md">
          Google Partner
        </h1> */}
        <h1 className="text-[60px] font-bold">
          Earn <span className="text-[#1090CB]"> Money</span> with
          <br /> your apps
        </h1>
        <p className="text-2xl text-[#5C5C5C] mt-10">
          We make earning money easy with in-app<br /> advertisements, through the
          strength of our community.
        </p>
        <div className="flex justify-between rounded-md border-[2px] w-[200px] md:w-[450px] h-[50px]  mt-5 bg-white border-blue-500">
          <input
            className="w-[200px] ml-1"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 rounded-md my-1 mr-1 text-white">
            <p className="p-2">Get Started</p>
          </button>
        </div>
      </div>
      <div>
        <img className="" src={guy} alt="guy shape" />
      </div>
    </div>
  );
}

export default MainSection