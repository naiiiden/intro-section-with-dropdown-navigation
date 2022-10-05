import React from "react";
import { useState } from "react";
import Logo from "../images/logo.svg";
import Menu_icon from "../images/icon-menu.svg";
import Menu_icon2 from "../images/icon-close-menu.svg";
import Todo_icon from "../images/icon-todo.svg";
import Calendar_icon from "../images/icon-calendar.svg";
import Reminders_icon from "../images/icon-reminders.svg";
import Planning_icon from "../images/icon-planning.svg";
import Arrow_up from "../images/icon-arrow-up.svg";
import Arrow_down from "../images/icon-arrow-down.svg";

export default function Header() {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };

    const [openFeatures, setOpenFeatures] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);

    return (
        <header>
            <img src={Logo} alt="Snap logo"/>
            <button aria-label={!isActive ? "Open menu" : "Close menu"} aria-haspopup="true" aria-expanded={isActive ? "true" : "false"} id="hamburger" className="hamburger" onClick={ToggleClass}>
                <img src={!isActive ? Menu_icon : Menu_icon2} alt=""/>
            </button>
            <nav>
                <ul id="nav-ul" className={!isActive ? null : "show"}>
                    <li className="submenu" role="button" onClick={() => setOpenFeatures(!openFeatures)} aria-haspopup="true" aria-expanded={openFeatures ? "true" : "false"}>
                        <div className="link_arrow_container">
                            <a href="#0">Features</a>
                            <img src={openFeatures ? Arrow_up : Arrow_down} alt=""/>
                        </div>
                        
                        <ul className={`dropdown ${openFeatures ? "show" : ""}`}>
                            <li>
                                <img src={Todo_icon} alt=""/>
                                <a href="#0">Todo List</a>
                            </li>
                            <li>
                                <img src={Calendar_icon} alt=""/>
                                <a href="#0">Calendar</a>
                            </li>
                            <li>
                                <img src={Reminders_icon} alt=""/>
                                <a href="#0">Reminders</a>
                            </li>
                            <li>
                                <img src={Planning_icon} alt=""/>
                                <a href="#0">Planning</a>
                            </li>
                        </ul>
                    </li>
                    <li className="submenu" role="button" onClick={() => setOpenCompany(!openCompany)} aria-haspopup="true" aria-expanded={openCompany ? "true" : "false"}>
                        <div className="link_arrow_container">
                            <a href="#0">Company</a>
                            <img src={openCompany ? Arrow_up : Arrow_down} alt=""/>
                        </div>
                        <ul className={`dropdown ${openCompany ? "show" : ""}`}>
                            <li><a href="#0">History</a></li>
                            <li><a href="#0">Our Team</a></li>
                            <li><a href="#0">Blog</a></li>
                        </ul>
                    </li>
                    <li><a href="#0">Careers</a></li>
                    <li className="push_left"><a href="#0">About</a></li>
                    <li className="push_right"><a href="#0">Login</a></li>
                    <li><a className="register" href="#0">Register</a></li>
                </ul>
            </nav>
        </header>
    )
};