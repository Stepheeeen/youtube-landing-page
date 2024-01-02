import React from 'react'

const Ratings = () => {
  return (
    <div>
     
      <div className="flex justify-between p-10">
        <div>
          <h1 className="text-blue-800 font-bold text-2xl">384k+</h1>
          <p className="text-[#5C5C5C] mt-2">Apps Created</p>
        </div>
        <div>
          <h1 className="text-blue-800 font-bold text-2xl">14M+</h1>
          <p className="text-[#5C5C5C] mt-2">Amount Earned</p>
        </div>
        <div>
          <h1 className="text-blue-800 font-bold text-2xl">135M+</h1>
          <p className="text-[#5C5C5C] mt-2">Ads Engaged</p>
        </div>
        <div>
          <h1 className="text-blue-800 font-bold text-2xl">45M+</h1>
          <p className="text-[#5C5C5C] mt-2">Avg Apps per Account</p>
        </div>
      </div>
    </div>
  );
}

export default Ratings