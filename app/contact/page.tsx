"use client";

import React from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="container mx-auto">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
