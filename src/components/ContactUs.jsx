import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40d0b4b7-ab1f-4649-b405-74f6b24d9b09");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank You for your Submission...! ");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact_us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white "
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
       initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={onSubmit}
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            rows={8}
            required
            placeholder="Enter Your Messages..."
          />
        </div>
        <button
          className="flex w-max gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer submit"
          type="submit"
        >
          Submit <img className="w-4" src={assets.arrow_icon} />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
