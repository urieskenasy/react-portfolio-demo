import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Nav() {

    const [ham, setHam] = useState(false)

    const handleClick = ( ) => {
        setHam(!ham)
    }
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
            <ul className='dropDown-nav-ul'>
            <span onClick={handleClick}><GiHamburgerMenu/></span>
            <div className={ham ? 'on' : 'nav-drop-down-list-items '}>
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
