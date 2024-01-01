import React from 'react'
import setup from ".././assets/setup.png";
import payment from ".././assets/payment.png";
import promotion from ".././assets/promotion.png";
import result from ".././assets/result.png";
import screen from ".././assets/screen.png";
import head from ".././assets/head.png";
import mark from ".././assets/mark.png";
import larrow from ".././assets/larrow.png";
import llarrow from ".././assets/llarrow.png";
import rarrow from ".././assets/rarrow.png";


const ProvigateSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-20 place-items-center">
        <div className="flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">Setup</h1>
            <p className="mt-2">
              Add an Existing App URl or Request for a App to be
              <br /> created for you.
            </p>
          </div>

          <img className="w-[80px] h-[90px]" src={setup} alt="guy shape" />
        </div>
        <div className="flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">Payments</h1>
            <p className="mt-2">
              After your App is approved. Topup your account.
            </p>
          </div>

          <img className="w-[80px] h-[90px]" src={payment} alt="guy shape" />
        </div>
        <div className="flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">Promotion</h1>
            <p className="mt-2">
              The channel promotion starts on YouTube. Your
              <br /> videos will be shown to your chosen audience and
              <br /> subscribers of similar channels. You can follow the
              <br /> promotion progress in your Prodvigate dashboard
            </p>
          </div>

          <img className="w-[80px] h-[90px]" src={promotion} alt="guy shape" />
        </div>
        <div className="flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">Results</h1>
            <p className="mt-2">
              Due to the right targeting, you receive views, new
              <br /> subscribers, likes and comments
            </p>
          </div>

          <img className="w-[80px] h-[90px]" src={result} alt="guy shape" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-3xl mt-20 font-bold">
          What the App look like
        </h1>
        <img className="w-[900px] mt-10" src={screen} alt="guy shape" />
      </div>
      <div className="flex flex-col justify-center items-center font-bold">
        <img className="w-[100px] mt-10" src={head} alt="guy shape" />
        <h1 className="text-center text-3xl mt-10 font-bold">
          Start Earning Now
        </h1>
        <div className="flex gap-10 mt-5">
          <div className="flex gap-3 items-center">
            <img className="w-[15px] h-[15px]" src={mark} alt="guy shape" />
            <p>Multiple Ads</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[15px] h-[15px]" src={mark} alt="guy shape" />
            <p>Real Users Real Engagement</p>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-8">
          <img className="w-[15px] h-[15px]" src={mark} alt="guy shape" />
          <p className="">Earn as low as $200 per week</p>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-5">
          Create An App now
        </button>
        <div className="flex gap-3 items-center mt-5">
          <p className="text-blue-500">or signin to see available app</p>
          <img className="w-[15px] h-[15px]" src={larrow} alt="guy shape" />
        </div>
      </div>
      <div>
        <div className='flex justify-between p-10 mt-20 '>
          <p className='font-bold text-2xl'>What our customers are saying</p>
          <div className='flex gap-5'>
            <img className="w-[50px] h-[30px] cursor-pointer" src={llarrow} alt="guy shape" />
            <img className="w-[50px] h-[30px] cursor-pointer" src={rarrow} alt="guy shape" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvigateSection