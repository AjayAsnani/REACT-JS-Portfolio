import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Resume from "../assets/Resume.pdf";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work
                <br />
                together!
              </h2>
              <div className="mb-6">
                <h4 className="text-xl uppercase text-accent font-medium mb-3 tracking-wide ">
                  Download CV
                </h4>
                <a
                  href={Resume}
                  download
                  className="text-[30px] lg:text-[60px] "
                >
                  Click Here
                </a>
              </div>
            </div>
          </motion.div>
          {/*form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            action="https://formspree.io/f/mbjeeaeo"
            method="POST"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name"
              name="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
              name="email"
              autoComplete="off"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              autoComplete="off"
              required
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
