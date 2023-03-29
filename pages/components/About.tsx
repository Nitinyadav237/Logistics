import React from "react";
import { FaAward, FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="bg-white">
      <div
        className="container mx-auto grid grid-cols-2 gap-[40px] 
      pt-[40px]"
      >
        <div>
          <h1 className="text-[32px] font-bold text-[#0E1D43]">About</h1>
          <p className="text-[15px] font-normal leading-[23px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            vitae at distinctio atque accusantium placeat asperiores quibusdam,
            maxime blanditiis numquam veniam, inventore nesciunt recusandae
            consequatur ullam quo consequuntur! Voluptatem, dolor?
          </p>
          <div className="space-y-[15px] pt-[20px] pl-[10px]">
            <div className="flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] ">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[23px] text-gray-600 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] ">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[23px] text-gray-600 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] ">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[23px] text-gray-600 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] ">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[23px] text-gray-600 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          <img src="/assets/about.jpg" alt="about" />
          <div className="absolute top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-[#0D42FF] h-[60px] w-[60px] rounded-full flex items-center justify-center">
            <FaCaretRight color="#fff" fontSize={30} />
            <div className="absolute h-[45px] w-[45px] rounded-full bg-[#0D42FF] animate-ping"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
