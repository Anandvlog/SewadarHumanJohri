import { NAV_ITEMS } from "../../data/siteData";
import Diya from "../common/Diya";

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = ({ go }) => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@sewadarhanumanjohri1656",
      icon: AiFillYoutube,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sewadar_hanuman_johri?igsh=dnM3NmxhMnFvNmd1",
      icon: AiFillInstagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/19FDHDHctN/",
      icon: AiFillFacebook,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <Diya size={28} />

          <p>
            © {new Date().getFullYear()} Sewadar Hanuman Johri Nalagarh
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Media */}
        <div className="footer-social">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        {/* Quote */}
        <p className="footer-quote">
          “सभी में मानवता – यही सच्ची पूजा है”
        </p>

      </div>
    </footer>
  );
};

export default Footer;