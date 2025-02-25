import React from "react";
import { motion } from "framer-motion";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div className=" ">
      <div
        onClick={() => setIsActive(!isActive)}
        className=" w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden"
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ top: isActive ? "-100%" : "0%" }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="w-full h-full bg-[#c9fd74] group">
            <PerpectiveText label="menu" />
          </div>
          <div className="w-full h-full bg-black text-white group">
            {/* Pass textColor prop for white text */}
            <PerpectiveText label="close" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Button;

const PerpectiveText = ({ label }) => {
  return (
    <div
      className="flex flex-col justify-center items-center 
        h-full w-full 
        [transform-style:preserve-3d] 
        transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        group-hover:[transform:rotateX(90deg)]"
    >
      <p
        className="transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          pointer-events-none uppercase
          group-hover:[transform:translateY(-100%)] group-hover:opacity-0"
      >
        {label}
      </p>
      <p
        className="absolute origin-bottom  
          [transform:rotateX(-90deg)_translateY(9px)] 
          opacity-0 
          transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          pointer-events-none uppercase
          group-hover:opacity-100 "
      >
        {label}
      </p>
    </div>
  );
};
