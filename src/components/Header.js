import React from "react";
import Logo from "../images/logo.svg";
import Menu_icon from "../images/icon-menu.svg";
import Todo_icon from "../images/icon-todo.svg";
import Calendar_icon from "../images/icon-calendar.svg";
import Reminders_icon from "../images/icon-reminders.svg";
import Planning_icon from "../images/icon-planning.svg";
import Arrow_up from "../images/icon-arrow-up.svg";
import Arrow_down from "../images/icon-arrow-down.svg";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Snap logo"/>
            <button aria-label="toggle navigation" id="hamburger" className="hamburger">
                <img src={Menu_icon}/>
            </button>
            <nav>
                <ul id="nav-ul" className="nav-ul">
                    <li>
                        <div className="link_arrow_container">
                            <a aria-haspopup="true">Features</a>
                            <img src={Arrow_down} alt=""/>
                        </div>
                        
                        <ul className="dropdown" aria-label="submenu">
                            <li>
                                <img src={Todo_icon} alt=""/>
                                <a>Todo List</a>
                            </li>
                            <li>
                                <img src={Calendar_icon} alt=""/>
                                <a>Calendar</a>
                            </li>
                            <li>
                                <img src={Reminders_icon} alt=""/>
                                <a>Reminders</a>
                            </li>
                            <li>
                                <img src={Planning_icon} alt=""/>
                                <a>Planning</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="link_arrow_container">
                            <a aria-haspopup="true">Company</a>
                            <img src={Arrow_down} alt=""/>
                        </div>
                        <ul className="dropdown" aria-label="submenu">
                            <li><a>History</a></li>
                            <li><a>Our Team</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </li>
                    <li><a>Careers</a></li>
                    <li><a>About</a></li>
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                </ul>
            </nav>
        </header>
    )
};