import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const Description = (props: Props) => {
  return (
    <div className="bg-white pt-[80px]">
        <div className="container mx-auto space-y-[120px]">
            <div className="pr-[15%]">
                <div className="flex gap-[30px]">
                      <motion.div
                          initial={{
                            opacity: 0,
                            x:-100
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0
                          }}
                          animate={{
                            opacity:1
                          }}
                 
                          transition={{
                            duration:0.5
                          }}
                          viewport={{once:true}}
                          className="flex justify-end
                    items-end">
              <img src="/assets/features-1.jpg" className="
                        w-[75%]" alt=" Description" />

                    </motion.div>
                      <motion.div
                      initial={{
                        opacity: 0,
                       
                      }}
                      whileInView={{
                        opacity: 1,
                  
                      }}
                      animate={{
                        opacity:1
                      }}
             
                      transition={{
                        duration:0.9
                      }}
                      viewport={{once:true}}
                      >
                        <h2 className="text-[26px] leading-[23px] font-semibold mb-[10px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul className="mt-[10px] space-y-[15px]">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
            <div className="pl-[10%]">
                <div className="flex gap-[20px]">
                      <motion.div
                          initial={{
                            opacity: 0,
                           
                          }}
                          whileInView={{
                            opacity: 1,
                        
                          }}
                          animate={{
                            opacity:1
                          }}
                 
                          transition={{
                            duration:0.9
                          }}
                          viewport={{once:true}}
                          
                          className="flex justify-start items-start flex-col pt-[20px]">
                        <h2 className="text-[26px] leading-[23px] font-semibold mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <p className="mt-[10px] w-[700px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </motion.div>
                      <motion.div
                      initial={{
                        opacity: 0,
                        x:100
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      animate={{
                        opacity:1
                      }}
             
                      transition={{
                        duration:0.5
                      }}
                      viewport={{once:true}}
                      
                  >
                        <img src="/assets/features-2.jpg" alt="" className='w-[75%] ' />
                    </motion.div>
                </div>
            </div>
            <div className="pr-[15%]">
                <div className="flex gap-[30px]">
                    <motion.div 
              
              initial={{
                opacity: 0,
                x:-100
               
              }}
              whileInView={{
                opacity: 1,
                x:0
          
              }}
              animate={{
                opacity:1
              }}
     
              transition={{
                duration:0.5
              }}
              viewport={{once:true}}
            className="flex justify-end items-end ">
                    <img src="/assets/features-3.jpg" alt="" className='w-[75%] ' /> 
                   
                </motion.div>
            <motion.div
             initial={{
              opacity: 0,
             
            }}
            whileInView={{
              opacity: 1,
        
            }}
            animate={{
              opacity:1
            }}
   
            transition={{
              duration:0.5
            }}
            viewport={{once:true}} 
            >
            <h2 className="text-[26px] leading-[23px] font-semibold mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <ul className="mt-[10px] space-y-[15px] ">
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
                    </motion.div>
          </div>
          </div>
                <div className="pl-[10%]">
                <div className="flex gap-[20px]">
                    <motion.div 
                        initial={{
                            opacity: 0,
                            x:100
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0
                          }}
                          animate={{
                            opacity:1
                          }}
                 
                          transition={{
                            duration:0.5
                          }}
                          viewport={{once:true}}
                          className="flex justify-start items-start flex-col pt-[20px]">
                        <h2 className="text-[26px] leading-[23px] font-semibold mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <p className="mt-[10px] w-[700px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </motion.div>
                      <motion.div
                      initial={{
                        opacity: 0,
                        x:100
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      animate={{
                        opacity:1,x:0
                      }}
             
                      transition={{
                        duration:0.5
                      }}
                      viewport={{once:true}}
                      >
                        <img src="/assets/features-4.jpg" alt="" className='w-[75%] ' />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description