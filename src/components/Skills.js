import React from "react";
import html5 from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import css3 from "../assets/css3.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import studio from "../assets/studio.png";
import boot from "../assets/boot.png";
import github from "../assets/github.png";
import rapid from "../assets/rapid1.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto ">
        <h2 className="h2 text-accent">Skills</h2>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex items-start justify-between ">
            {/*Skills Images */}
            <img
              src={html5}
              alt="html"
              className="h-[35px] w-[35px] lg:h-[90px] lg:w-[90px] md:h-[80px] md:w-[80px]"
            />
            <img
              src={css3}
              alt="css3"
              className="h-[40px] w-[30px] lg:h-[100px] lg:w-[80px] md:h-[80px] md:w-[70px]"
            />
            <img
              src={javascript}
              alt="javascript"
              className="h-[40px] w-[40px] lg:h-[90px] lg:w-[90px] md:h-[80px] md:w-[80px]"
            />
            <img
              src={tailwind}
              alt="tailwind"
              className="h-[40px] w-[40px] lg:h-[90px] lg:w-[90px] md:h-[80px] md:w-[80px]"
            />
          </div>
          <div className="flex-1 flex items-start justify-between mt-10 lg:mt-20 ">
            <img
              src={react}
              alt="react"
              className="lg:h-[100px] lg:w-[120px] h-[40px] w-[40px] md:h-[80px] md:w-[80px] "
            />
            <img
              src={node}
              alt="node"
              className="lg:h-[100px] lg:w-[150px] h-[40px] w-[50px] md:h-[80px] md:w-[85px]"
            />
            <img
              src={express}
              alt="express"
              className="lg:h-[100px] lg:w-[100px] h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
            />
            <img
              src={mysql}
              alt="mysql"
              className="lg:h-[100px] lg:w-[100px] h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex-1 flex items-start justify-between mt-10 lg:mt-20">
            <img
              src={mongo}
              alt="mongo"
              className="lg:h-[100px] lg:w-[150px] h-[40px] w-[50px] md:h-[80px] md:w-[80px] "
            />
            <img
              src={canva}
              alt="canva"
              className="lg:h-[100px] lg:w-[100px] h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
            />
            <img
              src={figma}
              alt="figma"
              className="lg:h-[100px] lg:w-[100px] h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
            />
            <img
              src={boot}
              alt="boot"
              className="lg:h-[100px] lg:w-[130px] h-[35px] w-[35px] md:h-[70px] md:w-[80px]"
            />
          </div>

          <div className="flex-1 flex items-start justify-between mt-10 lg:mt-20">
            <img
              src={github}
              alt="github"
              className="lg:h-[100px] lg:w-[180px] h-[40px] w-[55px] md:h-[80px] md:w-[110px] lg:ml-[-10]"
            />
            <img
              src={studio}
              alt="studio"
              className="lg:h-[100px] lg:w-[90px] h-[33px] w-[33px] md:h-[70px] md:w-[70px] lg:mt-5"
            />
            <img
              src={rapid}
              alt="rapidapi"
              className="lg:h-[150px] lg:w-[150px] h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
