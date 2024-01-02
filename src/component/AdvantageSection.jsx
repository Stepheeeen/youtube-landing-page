import React from 'react'
import mark from ".././assets/markavather.png";

const AdvantageSection = () => {
  return (
    <div className="mt-5 bg-blue-50 py-10 p-10 ">
      <h1 className="text-3xl font-bold text-center text-[#5C5C5C]">
        Our Advantages
      </h1>
      <div className="flex justify-between items-center mt-7">
        <div className="w-[300px] flex items-center flex-col">
          <img className=" cursor-pointer" src={mark} alt="guy shape" />
          <h1 className="font-bold mt-3">Reliability</h1>
          <p className="text-[#5C5C5C] text-center mt-1">
            Prodvigate is an official Google partner. We work only with YouTube
            Ads and well-known payment systems. Your channel and your money are
            always safe with us. You can cancel or pause your campaign at any
            time
          </p>
        </div>
        <div className="w-[300px] flex items-center flex-col">
          <img className=" cursor-pointer" src={mark} alt="guy shape" />
          <h1 className="font-bold mt-3">Reliability</h1>
          <p className="text-[#5C5C5C] text-center mt-1">
            Prodvigate is an official Google partner. We work only with YouTube
            Ads and well-known payment systems. Your channel and your money are
            always safe with us. You can cancel or pause your campaign at any
            time
          </p>
        </div>
        <div className="w-[300px] flex items-center flex-col">
          <img className=" cursor-pointer" src={mark} alt="guy shape" />
          <h1 className="font-bold mt-3">Reliability</h1>
          <p className="text-[#5C5C5C] text-center mt-1">
            Prodvigate is an official Google partner. We work only with YouTube
            Ads and well-known payment systems. Your channel and your money are
            always safe with us. You can cancel or pause your campaign at any
            time
          </p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl mt-20 font-bold text-center text-[#5C5C5C]">
          Do you have further questions?
        </h1>
        <p className="text-[#000000] font-bold mt-10">
          Please contact us via{" "}
          <span className="text-[#1090CB]">Live Chat</span>{" "}
        </p>
        <p className="text-black font-bold">
          or email at{" "}
          <span className="text-[#1090CB]">contact@prodvigate.com</span>{" "}
        </p>
        <p className="text-black font-bold">We will be happy to assist you!</p>
      </div>
    </div>
  );
}

export default AdvantageSection
