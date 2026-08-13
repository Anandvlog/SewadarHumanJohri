import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

import WhatsAppIcon from "./WhatsAppIcon";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    href: "#",
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: WhatsAppIcon,
    href: "#",
  },
];

function SocialRow({ variant = "footer" }) {
  return (
    <div className={`social-row ${variant}`}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            className="social-link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialRow;