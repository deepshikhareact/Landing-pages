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
        <h1 className="logo">Logo</h1>
        <button
          className={isMenuOpen ? "menu-toggle active " : "menu-toggle"}
          onClick={toggleMenu}
        >
          <svg width="26" height="26" viewBox="0 -7 48 48" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.88916 3.17411C0.88916 1.56328 2.195 0.257446 3.80583 0.257446H44.6392C46.25 0.257446 47.5558 1.56328 47.5558 3.17411C47.5558 4.78494 46.25 6.09078 44.6392 6.09078H3.80583C2.195 6.09078 0.88916 4.78494 0.88916 3.17411ZM0.88916 17.7574C0.88916 16.1466 2.195 14.8408 3.80583 14.8408H44.6392C46.25 14.8408 47.5558 16.1466 47.5558 17.7574C47.5558 19.3683 46.25 20.6741 44.6392 20.6741H3.80583C2.195 20.6741 0.88916 19.3683 0.88916 17.7574ZM21.3058 32.3408C21.3058 30.7299 22.6117 29.4241 24.2225 29.4241H44.6392C46.25 29.4241 47.5558 30.7299 47.5558 32.3408C47.5558 33.9516 46.25 35.2574 44.6392 35.2574H24.2225C22.6117 35.2574 21.3058 33.9516 21.3058 32.3408Z"
              fill="black"
            />
          </svg>
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
