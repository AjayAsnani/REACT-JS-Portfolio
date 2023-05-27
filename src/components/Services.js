import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Movies&TV Series App",
    description:
      "This application allows users to know the details about the movies and tv series like the cast, release date, duration, and description etc.",
    link: "Learn more",
    links: "https://ajay-netlify-472798.netlify.app/",
  },

  {
    name: "YouTub Clone",
    description:
      "Developed a fully responsive YouTube Clone which works on all devices with help of Rapid API.",
    link: "Learn more",
    links: "https://fastidious-narwhal-a5f96e.netlify.app/",
  },
  {
    name: "Fitness App",
    description:
      "Developed a fully responsive fitness app allows users to know about exercises of different body parts including video tutorials and similar exercises.",
    link: "Learn more",
    links: "https://velvety-concha-5d1808.netlify.app/",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* TEXT & IMAGE */}
          <motion.div
            variants={fadeIn("", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {" "}
              I'm an aspiring and Freelance Front-end Developer
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* SERVICES*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*SERVICES LISTS */}
            <div>
              {services.map((service, index) => {
                const { name, description, link, links } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight  ">
                        {description}
                      </p>
                      {/*
                    
                      <a href={links} className="text-accent ">
                        Click for Live Project
                      </a>
                    */}
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[47px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={links} className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
