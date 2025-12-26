import React, { FC } from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const socials = [
  { icon: <FaGithub />, url: "https://github.com/InFynnity8" },
  { icon: <FaTwitter />, url: "https://x.com/BoscoFynn" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/sackeyemmanuelfynn/" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sackeyemmanuelfynn/" },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: FC<SocialProps> = ({ containerStyles = "flex gap-2", iconStyles = "text-xl text-white" }) => {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const child = (
          <a aria-label={`Visit ${item.url}`} key={index} target="_blank" rel="noreferrer" href={item.url} className={iconStyles}>
            {item.icon}
          </a>
        );

        return reduced ? (
          child
        ) : (
          <motion.div key={index} whileHover={{ y: -4, scale: 1.06 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }}>
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Social;
