import React from 'react'
import setup from ".././assets/setup.png";
import payment from ".././assets/payment.png";
import promotion from ".././assets/promotion.png";
import result from ".././assets/result.png";
import screen from ".././assets/screen.png";


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
      <div className='flex justify-center flex-col' >
        <h1 className='text-center text-3xl mt-20 font-bold'>What the App look like</h1>
        <img className="w-full" src={screen} alt="guy shape" />
      </div>
    </div>
  );
}

export default ProvigateSection