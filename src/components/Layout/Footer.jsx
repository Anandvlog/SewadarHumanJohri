import { NAV_ITEMS } from "../../data/siteData";
import Diya from "../common/Diya";
import SocialLinks from "../common/SocialLinks";



const Footer = ({ go }) => {
 
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
          <SocialLinks />
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