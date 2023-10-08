import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const Menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Project",
      path: "/music-audio",
    },
    {
      name: "Service",
      path: "/music-video",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const hadelMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar">
      <div className="name-logo">
        <Link className="link-mobile" to="/">
          Dulanjana
        </Link>
      </div>
      <nav className="nav-item">
        <ul>
          {Menu.map((i, index) => (
            <li key={index}>
              <Link className="link" to={i.path}>
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-icon" onClick={() => hadelMenu()}>
        {isMobile ? <CloseIcon /> : <MenuIcon />}
      </div>
      {isMobile ? (
        <nav className="nav-item mobile-nav">
          <ul>
            {Menu.map((i, index) => (
              <li key={index}>
                <Link className="link-mobile" to={i.path}>
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default NavBar;
