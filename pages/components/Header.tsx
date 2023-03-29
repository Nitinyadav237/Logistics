import React from "react";
import CountUp, { useCountUp } from "react-countup";
type Props = {};

const Header = (props: Props) => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div id="home" className="bg-[#0E1D34] pb-[14px] head  text-white">
      <div className="container ml-200px mr-200px relative">
        <div
          className="flex items-center
         justify-between pt-[20px] text-white  "
        >
          <div>
            <img src="/assets/logo.png" alt="logo" className="logo" />
          </div>
          <div className="flex items-center gap-[50px]">
            <ul className="flex items-center gap-[40px] cursor-pointer font-semibold">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="bg-[#2756FF] py-[10px] px-[20px] text-[white] text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px]">
              Get a Quote
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-[40px] pb-[40px]">
          <div className="text-white">
            <div className="pl-[0px]">
              <h1 className="text-[48px] leading-[58px] w-[60%] font-bold mt-[50px] ">
                Your Lightning Fast Delivery Partner
              </h1>
              <p className="text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                magni vitae qui repudiandae, unde corporis sit necessitatibus
                dolores tenetur delectus commodi voluptate, possimus libero?
                Quaerat earum rem laboriosam sint voluptas?
              </p>
              <div className="bg-white w-[60%] pr-[4px] rounded-[6px] flex items-center mt-[30px]">
                <input
                  type="text"
                  className="bg-white 
                    outline-none w-full text-black py-[17px] pl-[14px]"
                  placeholder="zip code or city"
                />
                <button className="bg-[#2756FF] py-[12px] px-[20px] text-white rounded-[4px] ">
                  Search
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-[30px] pl-[20px]">
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2
                  className="text-[32px] font-semibold
                "
                >
                  <CountUp end={100} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]"></div>
                <p>Clients</p>
              </div>
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2
                  className="text-[32px] font-semibold
                "
                >
                  <CountUp end={2351} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]"></div>
                <p>Customer</p>
              </div>{" "}
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2
                  className="text-[32px] font-semibold
                "
                >
                  <CountUp end={421} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]"></div>
                <p>Support</p>
              </div>{" "}
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2
                  className="text-[32px] font-semibold
                "
                >
                  <CountUp end={971} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]"></div>
                <p>Workers</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="./assets/hero-img.svg "
              className='z-10 w-[87] alt="helo"'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
