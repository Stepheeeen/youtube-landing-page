import React from 'react'
import google from ".././assets/gooole.png";
import company from ".././assets/company.png";
import iphone from ".././assets/iphone.png";
import googleplay from ".././assets/googleplay.png";
import social from ".././assets/social.png";

const Footer = () => {
  return (
    <div className="p-10">
      <div>
        <div className="flex justify-between text-[#5C5C5C]">
          <div className="flex flex-col">
            <div className="flex gap-7">
              <p>Blog</p>
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </div>

            <div className="flex gap-7 mt-4">
              <p>FAQ</p>
              <p>Affillate program</p>
            </div>
          </div>

          <img className="w-[100px]" src={google} alt="guy shape" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#5C5C5C]"></div>
      <div className="flex justify-between mt-5 text-[#5C5C5C]">
        <div className="flex gap-5">
          <p>+1 (347) 391-2574</p>
          <p>contact@prodvigate.com</p>
        </div>
        <img className="w-[400px]" src={company} alt="guy shape" />
      </div>
      <div className="bg-blue-50 p-5 mt-5 text-[#5C5C5C] ">
        <div className="flex justify-between">
          <p>© 2023, Prodvigate</p>
          <p>Track promotion results</p>
        </div>
        <div className="flex justify-between mt-5">
          <p>
            US Office: Prodvigate Inc, 2875 NE 191st ST., Suite 500, Aventura,
            FL 33180
            <br /> EU Office: Viboom GmbH, Potsdamer Platz 10, 10785 Berlin
          </p>
          <div className="flex gap-5 cursor-pointer">
            <img className="w-full h-[50px]" src={iphone} alt="guy shape" />
            <img className="w-full h-[50px]" src={googleplay} alt="guy shape" />
            <img className="w-full h-[50px]" src={social} alt="guy shape" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer