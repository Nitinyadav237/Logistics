import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div id="pricing" className="bg-white pt-[40px] pb-[40px]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[32px] font-bold text-[#0E1D34]"></h1>
        <div className="h-[4px] w-[40px]mt-[8px] bg-[#0E1D34]"></div>
      </div>
      <div className="grid grid-cols-3 mt-[40px] gap-[30px] px-[15%]">
        <div className="border shadow-lg pt-[50px] pl-[35px] rounded-md">
          <p className="text-[#0E1D34] text-[20px] leading-[24px] font-semibold">
            Free Plan
          </p>
          <h2 className="text-[rgba(108,117,125,0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]">
            <span className="text-[#0d42ff] text-[48px] leading-[58px] font-normal">
              $0
            </span>
            /month
          </h2>
          <ul className="space-y-[25px]">
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
          </ul>
          <button className="border rounded-md py-[10px] px-[25px] my-[45px] border-[#0d42ff] hover:bg-[#0d42ff] hover:text-white">
            Buy Now
          </button>
        </div>
        <div className="border shadow-lg pt-[50px] pl-[35px] rounded-md">
          <p className="text-[#0E1D34] text-[20px] leading-[24px] font-semibold">
            Business Plan
          </p>
          <h2 className="text-[rgba(108,117,125,0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]">
            <span className="text-[#0d42ff] text-[48px] leading-[58px] font-normal">
              $35
            </span>
            /month
          </h2>
          <ul className="space-y-[25px]">
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
          </ul>
          <button className="border rounded-md py-[10px] px-[25px] my-[45px] border-[#0d42ff] bg-[#0d42ff] text-white">
            Buy Now
          </button>
        </div>
        <div className="border shadow-lg pt-[50px] pl-[35px] rounded-md border-t-[3px] border-t-[#od42ff]">
          <p className="text-[#0E1D34] text-[20px] leading-[24px] font-semibold">
            Business Plan
          </p>
          <h2 className="text-[rgba(108,117,125,0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]">
            <span className="text-[#0d42ff] text-[48px] leading-[58px] font-normal">
              $29
            </span>
            /month
          </h2>
          <ul className="space-y-[25px]">
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]">
              <FaCheck color="#059652" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li className="text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through">
              <FaTimes color="#B5BABE" /> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </li>
          </ul>
          <button className="border rounded-md py-[10px] px-[25px] my-[45px] border-[#0d42ff] hover:bg-[#0d42ff] hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
