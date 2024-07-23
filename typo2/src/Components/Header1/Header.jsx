import { useState } from "react";
import "./style.scss";
import { menuItems } from "./const";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header1">
      <div className="top">
        <h1 className="logo">
          <img src="/assets/Banner.png" height={40} width={40} alt="Logo" />
          <h3 className="text-16 text-700">CX Agent</h3>

        </h1>
        <button
          className={isMenuOpen ? "menu-toggle active " : "menu-toggle"}
          onClick={toggleMenu}
        >
        </button>
      </div>
      <div className={isMenuOpen ? "menu active " : "menu"}>
        {menuItems.map((item, index) => (
          <div key={index} className="item-section">
            <h3 onClick={() => (window.location = item.url)}> {item.title}</h3>
            <div className="items">
              {item.links &&
                item.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href}>
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
