import React, { useState, useEffect } from "react";
import "./home.scss";
import "../../../App.scss";
import AnimatedPage from "../../AnimatedPage";
import Loader from "react-loaders";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
import { motion } from "framer-motion"
export default function Home() {

    const svgVariant = {
    hidden: {rotate: -180},
    visible: {
        rotate: 0,
        transition: {
            duration : 1
        }
    }
      }

    //
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = [
        " ",
        "U",
        "r",
        "i",
        " ",
        "E",
        "s",
        "k",
        "e",
        "n",
        "a",
        "s",
        "y",
    ];
    const jobArray = [
        "w",
        "e",
        "b",
        " ",
        "d",
        "e",
        "v",
        "e",
        "l",
        "o",
        "p",
        "e",
        "r",
        ".",
    ];
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);
    }, []);
    //
    return (
        <>
            <AnimatedPage>
                <span className="tags top-tags">&lt;body&gt;</span>
                <div className="home-container">
                    <div className="h1-p-container">
                        <h1 className='homePage-h1'>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i</span>
                            <br />
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>

                            {/* <img
                            src={require("../../assets/images/logo-s.png")}
                            alt="JavaScript Developer Name, Web Developer Name"
                        /> */}
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={15}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={jobArray}
                                idx={22}
                            />
                        </h1>

                        <p>
                            Full Stack Developer / Problem Solver / Project
                            Manager
                        </p>
                    </div>
                    <div className="logo-container">
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="500.000000pt"
                            height="500.000000pt"
                            viewBox="0 0 500.000000 500.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                fill="#ffd700"
                                stroke="none"
                            >

                                <motion.path
                                    d="M4163 2738 c-49 -51 -95 -103 -102 -115 -6 -13 -16 -23 -21 -23 -5 0
-25 24 -44 53 -19 28 -60 79 -90 112 -46 51 -57 58 -73 49 -30 -18 -26 -41 14
-86 22 -24 68 -78 104 -122 l64 -79 5 -115 c4 -93 8 -117 22 -125 12 -8 21 -7
32 2 13 11 16 35 16 125 0 130 -3 124 124 271 47 55 86 105 86 111 0 13 -21
34 -35 34 -6 0 -52 -42 -102 -92z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M980 2800 c-95 -33 -138 -106 -106 -182 21 -48 76 -81 186 -108 152
-37 201 -69 185 -119 -19 -61 -212 -52 -310 14 -50 35 -79 30 -83 -12 -5 -49
29 -77 117 -96 208 -47 361 3 361 119 0 73 -29 95 -205 155 -82 29 -156 57
-163 62 -7 6 -12 24 -10 41 4 39 54 69 113 69 42 0 105 -19 105 -32 0 -9 60
-71 69 -71 37 0 2 104 -46 138 -29 21 -99 42 -138 41 -11 0 -45 -8 -75 -19z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M3456 2809 c-152 -37 -185 -197 -55 -264 14 -8 72 -26 129 -40 116
-29 155 -46 170 -74 48 -91 -184 -110 -311 -27 -47 32 -67 33 -78 4 -20 -54
19 -90 126 -114 93 -20 221 -16 275 10 69 33 96 108 61 167 -21 36 -77 63
-233 114 -112 37 -139 54 -140 86 0 24 44 60 85 69 65 15 105 2 157 -53 47
-49 68 -54 68 -16 0 25 -28 80 -49 97 -52 41 -136 58 -205 41z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M4547 2768 c-78 -123 -227 -432 -227 -471 0 -55 53 -61 83 -9 44 76
227 489 225 507 -2 12 -12 21 -25 23 -18 3 -30 -8 -56 -50z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M414 2801 c-21 -9 -22 -18 -29 -229 -8 -238 -5 -256 43 -269 15 -5
93 -8 174 -7 162 1 198 10 198 50 0 33 -55 45 -188 44 -59 -1 -113 -1 -119 -1
-9 1 -13 22 -13 71 l0 70 58 0 c54 0 166 14 205 26 21 7 22 40 1 48 -9 3 -73
6 -144 6 l-128 0 -4 58 c-2 31 -2 61 0 65 2 5 73 5 157 2 84 -4 165 -5 179 -1
31 8 34 36 7 53 -24 15 -367 27 -397 14z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M1908 2799 c-15 -12 -18 -44 -24 -239 -9 -287 -25 -265 201 -264 136
0 168 3 189 17 30 20 33 39 9 58 -15 13 -57 15 -305 19 -9 0 -11 102 -2 124 5
12 21 16 63 17 95 1 203 22 215 42 19 30 -10 37 -151 37 l-133 0 0 28 c0 15
-3 44 -7 65 l-6 38 180 -7 c161 -6 180 -5 186 10 8 21 0 43 -19 50 -9 3 -97 9
-197 12 -145 5 -185 3 -199 -7z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M2780 2764 c-10 -12 -16 -63 -20 -187 l-5 -170 -62 64 c-33 35 -97
107 -141 159 -96 115 -115 133 -139 128 -15 -3 -19 -17 -25 -88 -4 -47 -15
-134 -24 -195 -19 -130 -16 -193 8 -209 14 -8 22 -7 35 6 13 14 18 49 25 194
4 98 10 179 12 181 6 7 38 -30 182 -209 73 -91 144 -170 156 -174 16 -5 27 -1
40 16 15 19 18 40 17 144 -2 206 -12 323 -30 341 -14 15 -17 15 -29 -1z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M1425 2734 c-11 -11 -15 -37 -15 -94 0 -58 -4 -83 -16 -94 -8 -9 -19
-16 -24 -16 -20 0 -17 -32 5 -56 22 -24 25 -36 25 -110 0 -75 2 -83 21 -89 33
-11 43 10 47 90 l4 75 27 -7 c14 -3 82 -30 151 -58 155 -65 174 -70 194 -49 9
8 16 19 16 24 0 19 -55 50 -170 95 l-121 47 78 45 c88 51 153 108 153 135 0
30 -37 21 -171 -42 -69 -33 -132 -60 -138 -60 -7 0 -11 23 -11 63 0 100 -20
136 -55 101z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M3052 2738 c-5 -7 -49 -94 -97 -193 -94 -194 -110 -257 -69 -263 24
-3 45 23 73 95 12 31 24 48 35 47 9 0 50 -1 91 -2 l76 -2 18 -42 c36 -83 101
-115 101 -50 0 50 -146 384 -178 409 -22 16 -37 16 -50 1z m43 -178 c10 -22
16 -43 13 -46 -3 -3 -24 -4 -46 -2 l-41 3 21 47 c11 26 24 46 27 43 4 -2 16
-22 26 -45z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M4683 2653 c-6 -17 6 -30 97 -104 l43 -35 -87 -68 c-58 -46 -85 -73
-82 -83 3 -8 6 -17 6 -19 0 -23 126 38 188 91 35 31 42 42 42 74 0 43 -22 68
-110 125 -60 39 -87 45 -97 19z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                                <motion.path
                                    d="M235 2617 c-86 -46 -113 -68 -124 -100 -14 -40 6 -76 71 -128 71 -56
102 -71 117 -56 20 20 13 31 -56 93 l-67 62 49 33 c97 68 130 95 130 110 0 27
-57 21 -120 -14z"
variants={svgVariant}
      initial="start"
      animate="finished"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </AnimatedPage>
            <Loader type="ball-grid-pulse" style={{ transform: "scale(2)" }} />
        </>
    );
}
