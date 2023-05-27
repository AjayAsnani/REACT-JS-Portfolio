import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/work1.png";
import img2 from "../assets/works2.png";
import img3 from "../assets/works3.png";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Creating beautiful and functional user experiences with the
                power of code and design.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                src={img1}
                alt=""
                className="group-hover:scale-125 translate-all duration-500"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-50">
                <span className="text-gradient">Landing Page</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-50">
                <span className="text-3xl text-white">Bank Landing Page</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 translate-all duration-700 z-50">
                <a
                  href="https://magenta-kangaroo-b08c67.netlify.app/"
                  className="text-2xl text-white"
                >
                  Click Me
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/*image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                src={img2}
                alt=""
                className="group-hover:scale-125 translate-all duration-500"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-50">
                <span className="text-gradient">BLOG Website</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-50">
                <span className="text-3xl text-white">
                  ChatGPT Blog Website
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 translate-all duration-700 z-50">
                <a
                  href="https://polite-heliotrope-12dbb9.netlify.app/"
                  className="text-2xl text-white"
                >
                  Click Me
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                src={img3}
                alt=""
                className="group-hover:scale-125 translate-all duration-500"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-50">
                <span className="text-gradient"> YouTube Clone</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-50">
                <span className="text-2xl text-white">
                  Responsive Youtube Clone
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 translate-all duration-700 z-50">
                <a
                  href="https://velvety-concha-5d1808.netlify.app/"
                  className="text-2xl text-white"
                >
                  Click Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
//15:41
