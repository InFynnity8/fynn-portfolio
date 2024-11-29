import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/InFynnity8",
  },
  {
    icon: <FaTwitter />,
    url: "https://x.com/sackey_fynn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/sackeyemmanuelfynn/",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sackeyemmanuelfynn/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} target="blank" href={item.url} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
