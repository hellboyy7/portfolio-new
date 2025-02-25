import { useState } from "react";
import Button from "../Components/Button";
import transition from "../transition";
// import Menu from "../Components/Menu";

import { AnimatePresence, motion } from "framer-motion";
import Nav from "../Components/Nav";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 480,
      height: 650,
      top: "-20px",
      right: "-20px",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.5,
        delay: 0.3,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <div className="fixed right-[50px] ">
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="relative top-0  right-0 w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px]   "
      >
        <AnimatePresence> {isActive && <Nav />}</AnimatePresence>
      </motion.div>

      <div className=" absolute top-0 right-0 ">
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default transition(About);
