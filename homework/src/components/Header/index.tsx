import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../User";
import "./styles.css";

export const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenusClass] = useState("menu hidden");
  const [isMenusClicked, setIsMenusClicked] = useState(false);
  const [nav_clicked, setNavClicked] = useState("");

  const updateMenu = () => {
    if (!isMenusClicked) {
      setBurgerClass("burger-bar clicked");
      setMenusClass("menu visible");
      setNavClicked("nav_clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenusClass("menu hidden");
      setNavClicked("");
    }
    setIsMenusClicked(!isMenusClicked);
  };

  return (
    <div className="header">
      <div className="container">
        <nav className={nav_clicked}>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <User username="Artsiom Vasileuski" />
        </nav>

        <div className={menu_class}>
          <ul className="list">
            <div className="list__first-column">
              <li className="list__item">
                <a href="#">Login</a>
              </li>
              <li className="list__item">
                <Link to="/registration">Registration</Link>
              </li>
            </div>
            <div className="list__second-column">
              <li className="list__item">
                <Link to="/">Main</Link>
              </li>
              <li className="list__item">
                <Link to="/emojis">Emoji</Link>
              </li>
            </div>

            <svg
              width="60"
              height="30"
              viewBox="0 0 60 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.25"
                y="0.25"
                width="59.5"
                height="29.5"
                rx="14.75"
                fill="#FDFDFF"
                stroke="#007BFF"
                stroke-width="0.5"
              />
              <rect x="8" y="5" width="20" height="20" rx="10" fill="#016EFC" />
            </svg>
          </ul>
        </div>
      </div>
    </div>
  );
};
