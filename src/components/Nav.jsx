import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/">
                        <FaHouseUser className="icon" />
                    </Link>
                </li>
                <li className="nav-container-ul-li">
                    <Link to="/About" className="nav-container-ul-li-link">
                        <FaInfoCircle className="icon" />
                    </Link>
                </li>

                <li className="nav-container-ul-li">
                    <Link to="/Skills" className="nav-container-ul-li-link">
                        <FaBuffer className="icon" />
                    </Link>
                </li>
                <li className="nav-container-ul-li">
                    <Link to="/Projects" className="nav-container-ul-li-link">
                        <FaProjectDiagram className="icon" />
                    </Link>
                </li>
                <li className="nav-container-ul-li">
                    <Link to="/Contact" className="nav-container-ul-li-link">
                        <FaHandshake className="icon" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
