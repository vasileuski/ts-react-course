import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
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

  const { isDark, setIsDark } = useContext(Context);

  const handleChange = () => setIsDark(!isDark);

  return (
    <div className="header">
      <div className="header-container">
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
                <Link to="/login">Login</Link>
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

            <DarkModeToggle inputChecked={isDark} onChange={handleChange} />
          </ul>
        </div>
      </div>
    </div>
  );
};
