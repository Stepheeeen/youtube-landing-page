import React from 'react'
import google from ".././assets/gooole.png";

const Footer = () => {
  return (
    <div className="p-10">
      <div>
        <div className="flex justify-between">
          <div className='flex gap-5'>
            <p>Blog</p>
            <p>Terms of service</p>
            <p>Privacy policy</p>
          </div>

          <div className='flex'>
            <p>FAQ</p>
            <p>Affillate program</p>
          </div>
          <img className="w-[100px]" src={google} alt="guy shape" />
        </div>
      </div>
    </div>
  );
}

export default Footer