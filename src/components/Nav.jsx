import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import AnimatedPage from "./AnimatedPage";
export default function Nav() {
    // const variants = {
    //     open: { opacity: 1, x: 0 },
    //     closed: { opacity: 0, x: "-100%" },
    // };

    const [ham, setHam] = useState(false);

    const handleClick = () => {
        setHam(!ham);
    };
    return (
        <div className="nav-container">
            <ul className="nav-container-ul">
                <li className="nav-container-ul-li">
                    <NavLink to="/" activeclassname="active">
                        <FaHouseUser className="icon" />
                    </NavLink>
                </li>
                <li className="nav-container-ul-li">
                    <NavLink
                        to="/About"
                        className="nav-container-ul-li-link about-link"
                        activeclassname="active"
                    >
                        <FaInfoCircle className="icon" />
                    </NavLink>
                </li>

                <li className="nav-container-ul-li">
                    <NavLink
                        to="/Skills"
                        className="nav-container-ul-li-link skills-link"
                        activeclassname="active"
                    >
                        <FaBuffer className="icon" />
                    </NavLink>
                </li>
                <li className="nav-container-ul-li">
                    <NavLink
                        to="/Projects"
                        className="nav-container-ul-li-link portfolio-link"
                        activeclassname="active"
                    >
                        <FaProjectDiagram className="icon" />
                    </NavLink>
                </li>
                <li className="nav-container-ul-li">
                    <NavLink
                        to="/Contact"
                        className="nav-container-ul-li-link contact-link"
                        activeclassname="active"
                    >
                        <FaHandshake className="icon" />
                    </NavLink>
                </li>
            </ul>

            <ul className="dropDown-nav-ul">
                <span className="hamburger-icon" onClick={handleClick}>
                    <GiHamburgerMenu className={`svg ${ham ? 'svg-animated' : ''}`}/>
                </span>
                <div className={ham ? "on" : "off"}>
                    <li className="nav-container-ul-li">
                        <NavLink to="/" activeclassname="active">
                            <FaHouseUser className="icon" />
                        </NavLink>
                    </li>
                    <li className="nav-container-ul-li">
                        <NavLink
                            to="/About"
                            className="nav-container-ul-li-link"
                            activeclassname="active"
                        >
                            <FaInfoCircle className="icon" />
                        </NavLink>
                    </li>

                    <li className="nav-container-ul-li">
                        <NavLink
                            to="/Skills"
                            className="nav-container-ul-li-link"
                            activeclassname="active"
                        >
                            <FaBuffer className="icon" />
                        </NavLink>
                    </li>
                    <li className="nav-container-ul-li">
                        <NavLink
                            to="/Projects"
                            className="nav-container-ul-li-link"
                            activeclassname="active"
                        >
                            <FaProjectDiagram className="icon" />
                        </NavLink>
                    </li>
                    <li className="nav-container-ul-li">
                        <NavLink
                            to="/Contact"
                            className="nav-container-ul-li-link"
                            activeclassname="active"
                        >
                            <FaHandshake className="icon" />
                        </NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
}
