"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(+233) 599 515 047",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sackeyemmanuelfynn@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Adade St, Kasoa 00233",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <ul className="flex flex-col gap-8">
      {info.map((item, index) => {
        return (
          <li key={index} className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-secondary text-accent rounded-md flex items-center justify-center">
              <div className="text-[22px]">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.label}</p>
              <h3 className="text-[16px]">{item.value}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactInfo;
