import React from "react";
import mark from ".././assets/markavather.png";
import efficient from ".././assets/efficiency.png";
import comfy from ".././assets/convinient.png";


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
          <img className=" cursor-pointer" src={efficient} alt="guy shape" />
          <h1 className="font-bold mt-3">Efficiency</h1>
          <p className="text-[#5C5C5C] text-center mt-1">
            Our algorithms optimize your channel`s promotion in real time. This
            means your ad budget will be spent more efficiently. At the same
            time you can always ask us for further help or advice
          </p>
        </div>
        <div className="w-[300px] flex items-center flex-col">
          <img className=" cursor-pointer" src={comfy} alt="guy shape" />
          <h1 className="font-bold mt-3">Convenience</h1>
          <p className="text-[#5C5C5C] text-center mt-1">
            We have made things as simple as possible. Keep creating your
            awesome content and don't waste your time with setting up your
            promotion. We will do it for you!
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
};

export default AdvantageSection;
