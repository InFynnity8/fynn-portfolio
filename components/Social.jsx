import Link from "next/link";
import {
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/fynndesign",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/fynndesign",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.facebook.com/fynndesign",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/fynndesign",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.url} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
