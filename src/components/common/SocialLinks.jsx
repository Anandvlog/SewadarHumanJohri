import { socialLinks } from "../../data/siteData";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;