import React from "react";
import { links } from "./data";
import { motion } from "framer-motion";

const Nav = () => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,

      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.3 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.3 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="flex flex-col justify-between h-full px-10 pt-24 pb-12 ">
      <div className="flex flex-col gap-5">
        {links.map((link, i) => (
          <div
            key={`b_${i}`}
            className="[perspective:120px] [perspective-origin:bottom] "
            // className="linkContainer"
          >
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a href={link.href} className="text-black text-5xl">
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
