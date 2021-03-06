import React, { useState, useEffect } from "react";
import "./about.scss";
import AnimatedPage from "../../AnimatedPage";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import { FaAngular } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import Snowfall from "react-snowfall";
import Sparkle from "react-sparkle";
export default function About() {
    //
    const [letterClass, setLetterClass] = useState("text-animate");
    //
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);
    return (
        <>
            <AnimatedPage>
                <div className="about-container">
                    <Sparkle
                        fadeOutSpeed={5}
                        flickerSpeed={"normal"}
                        flicker={false}
                    />
                    <div className="about-h1-p-container">
                        <div className="about-h1-container">
                            <h1>
                                <AnimatedLetters
                                    strArray={[
                                        "A",
                                        "b",
                                        "o",
                                        "u",
                                        "t",
                                        " ",
                                        "m",
                                        "e",
                                    ]}
                                    idx={15}
                                    letterClass={letterClass}
                                />
                            </h1>
                        </div>
                        <div className="about-p-container">
                            <p>
                                I am a fullstack developer, specialized in web 3
                                technologies as well as building web
                                applications. my main coding languages is
                                javascript, html, css. i work with react,
                                angular, node JS, and the newest designing
                                platforms the market offer. I have 1 year of
                                experience in the industry with one year of
                                certificated study in the field
                            </p>
                            <p>
                                I love meeting new challenges, absorb new ideas,
                                and make amazing collaborations. My state of
                                mind is to never fear from the unknown, and dive
                                quickly as possible into the deep cold water.
                            </p>
                            <p>
                                As of now i am looking for new challenges,
                                projects, and private applications to build. i
                                can build any kind of web app, from shop, to
                                blog, to meditation app or anything else that
                                comes to mind.
                            </p>
                        </div>
                    </div>

                    <div className="stage-cube-cont">
                        {/* <Snowfall snowflakeCount={100} /> */}

                        <div className="cubespinner">
                            <div className="face1">
                                <FaAngular />
                            </div>
                            <div className="face2">
                                <FaHtml5 />
                            </div>
                            <div className="face3">
                                <FaCss3Alt />
                            </div>
                            <div className="face4">
                                <FaReact />
                            </div>
                            <div className="face5">
                                <TbBrandJavascript />
                            </div>
                            <div className="face6">
                                <FaGitAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
            <Loader
                type="ball-grid-pulse"
                style={{
                    transform: "scale(0.5)",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                }}
            />
        </>
    );
}
