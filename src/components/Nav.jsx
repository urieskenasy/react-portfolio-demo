import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
export default function Nav() {
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
            </ul>
        </div>
    );
}
