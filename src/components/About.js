import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import about from "../assets/about.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh]" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top flex items-center justify-center hidden lg:flex max-w-[320px] lg:max-w-[482px]"
          >
            <img src={about} className="h-[500px] w-[450px]" />
          </motion.div>
          {/* TEXT */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm an aspiring and Freelance Front-end Developer
            </h3>
            <p className="mb-6">
              {" "}
              Passionate about developing and designing websites and
              applications. Excellent problem-solving skills and ability to
              perform well in a team. Seeking to help companies in delivering
              their final product as a developer, as well as grow and develop my
              skills as a coder.
            </p>
            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 mt-1">
                  {inView ? <CountUp start={0} end={10} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  No of Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me.</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio{" "}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
