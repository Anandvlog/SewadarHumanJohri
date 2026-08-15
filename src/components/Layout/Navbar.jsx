import { useState } from "react";
import { Menu, X } from "lucide-react";

import Diya from "../common/Diya";
import { NAV_ITEMS } from "../../data/siteData";

const Navbar = ({ active, go }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">

        <button className="brand" onClick={() => go("home")}>
          <Diya size={30} />

          <span className="brand-text">
            <span className="brand-en">
              Sewadar Hanuman Johri
            </span>

            <span className="brand-hi">
              नालागढ़
            </span>
          </span>
        </button>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                active === item.id ? "is-active" : ""
              }`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`mobile-link ${
                active === item.id ? "is-active" : ""
              }`}
              onClick={() => {
                go(item.id);
                setOpen(false);
              }}
            >
              {item.label}

              <span>{item.hi}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;