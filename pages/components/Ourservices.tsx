import React from "react";

import { motion } from "framer-motion";

type Props = {};

const Ourservices = (props: Props) => {
  return (
    <div id="service" className="bg-white">
      <div className="container mx-auto pt-[80px] pb-[80px]">
        <div className="flex items-center justify-center mx-auto flex-col">
          <h1 className="text-[32px] font-bold text-[#0E1D34] ">
            Our Services
          </h1>
          <div className="h-[4px] w-[40px] mt-[8px] bg-[#0E1D34]" />
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/cargo-service.jpg"
              className="h-[350px] w-full object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Cargo Service
            </h2>
            <p className="text-[15px] text-gray-600 pl-[15px] pb-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/logistics-service.jpg"
              className="h-[350px] w-full object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Logistics Service
            </h2>
            <p
              className="text-[15px] text-gray-600 pl-[15px] 
              pb-[10px]"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/packaging-service.jpg"
              className="h-[350px] w-full object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Packaging Service
            </h2>
            <p
              className="text-[15px] text-gray-600 pl-[15px] 
              pb-[10px]"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/storage-service.jpg"
              className="h-[350px] w-full  object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Storage Service
            </h2>
            <p
              className="text-[15px] text-gray-600 pl-[15px] 
              pb-[10px]"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/warehousing-service.jpg"
              className="h-[350px] w-full object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Warehousing Service
            </h2>
            <p className="text-[15px] text-gray-600 pl-[15px] pb-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="border shadow-lg p-[5px]"
          >
            <img
              src="/assets/trucking-service.jpg"
              className="h-[350px] w-full object-cover"
              alt="Our Services"
            />
            <h2 className="text-[24px] font-semibold pl-[15px] pt-[15px]">
              Trucking Service
            </h2>
            <p className="text-[15px] text-gray-600 pl-[15px] pb-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dolores sapiente molestias dolorem.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
