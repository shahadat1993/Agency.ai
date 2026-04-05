import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top... */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="WebSite Logo.."
            className="w-32 sm:w-40 max-sm:ml-4"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
          <ul className="flex gap-15">
            <li>
              <a className="hover:text-primary" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our_work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact_us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="submit bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6 " />
      {/* Footer Bootom */}
      <motion.div 
       initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
       className="flex justify-between text-sm text-gray-700 dark:text-gray-400 my-4">
        <p>Copyright 2026 © Shahadat. - All Right Reserved.</p>
        <div className="flex gap-4">
          <a target="_blank" href="https://www.facebook.com/riyad.tasnif">
            <img src={assets.facebook_icon} alt="FaceBook Profile" />
          </a>
          <a target="_blank" href="https://x.com/Shahadat199131">
            <img src={assets.twitter_icon} alt="Twitter Profile" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/riyad____tasnif199131/"
          >
            <img src={assets.instagram_icon} alt="Insta Profile" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shahadat-hossen-tasnif/"
          >
            <img src={assets.linkedin_icon} alt="LinkedIn Profile" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
