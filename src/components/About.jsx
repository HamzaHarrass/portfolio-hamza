import React from "react";
import aboutImage from "../assets/About.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-[12rem] mx-[4rem] max-xl:mx-[1rem]" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        About Me
      </motion.h1>
      <div className=" flex gap-[10rem] max-xl:gap-[3rem] max-xl:flex-wrap justify-center">
        <motion.img
          src={aboutImage}
          alt="Me"
          initial={{ opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-[30%] h-[100%] rounded-xl max-xl:w-[100%]"
          viewport={{ once: true }}
        />
        <motion.div
          className="w-[100%] flex flex-col gap-[2rem]"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" text-[2.5rem] max-md:text-[2rem]">
          Je suis un ingénieur logiciel principalement axé sur l'écosystème React.
          </h1>
          <p className=" text-[2rem] max-md:text-[1.5rem] text-[#838697]">
          années d'expérience à la fois en UI/UX et en développement frontend. Au cours des 3 dernières années, j'ai renforcé mes bases en ingénierie web et je suis impatient de les déployer sur des projets stimulants pour élargir mes compétences actuelles et ma pile technologique.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
