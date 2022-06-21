import React, { useState, useEffect } from "react";
import "./projects.scss";
import AnimatedPage from "../../AnimatedPage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
import Loader from "react-loaders";
export default function Projects() {
    //
    const [letterClass, setLetterClass] = useState("text-animate");
    //
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    const projects = [
        {
            title: "todos-mini-app",
            imageUrl: "./images/todoApp.png",
            text: "A small tasks application, created with html css & javascript",
            gitHubUrl: "https://github.com/urieskenasy/todos-mini-app",
            liveVersionUrl: "",
        },
        {
            title: "meditation-mini-app",
            imageUrl: "./images/meditationApp.png",
            text: "A mini meditation application i have created. has 2 themes: beach & rain, also has timer and waves/rain sounds, created with html css & javascript",
            gitHubUrl: "https://github.com/urieskenasy/meditation-mini-app",
            liveVersionUrl: "",
        },
        {
            title: "currency-converter",
            imageUrl: "./images/currencyConverter.png",
            text: "Simple Crypto currency converter. from $ to btc/ltc/eth, created with html css & javascript",
            gitHubUrl: "https://github.com/urieskenasy/curreny-converter",
            liveVersionUrl: "https://urieskenasy.github.io/curreny-converter/",
        },
        {
            title: "dice-game ",
            imageUrl: "./images/diceGame.png",
            text: "A nice simple rolling dice game, created with html css & javascript",
            gitHubUrl: "https://github.com/urieskenasy/dice-game",
            liveVersionUrl: "",
        },
        {
            title: "my-Portfolio ",
            imageUrl: "./images/myPortfolio.png",
            text: "My first portfolio demo webpage , created with html css & javascript ",
            gitHubUrl: "https://github.com/urieskenasy/my-Portfolio",
            liveVersionUrl: "",
        },
        {
            title: "my-webpage",
            imageUrl: "./images/myWebpage.png",
            text: "My second portfolio demo webpage , created with html css & javascript ",
            gitHubUrl: "https://github.com/urieskenasy/my-webpage",
            liveVersionUrl: "",
        },
        {
            title: "Guess My Number",
            imageUrl: "./images/guessMyNumber.png",
            text: " A simple javaScript game. guess number between 1 - 20",
            gitHubUrl: "https://github.com/urieskenasy/Guess-My-Number",
            liveVersionUrl: "",
        },
        {
            title: "Bootstrap-First-short-project ",
            imageUrl: "./images/bootstrap.png",
            text: "My first full on BootStarp landing page",
            gitHubUrl:
                "https://github.com/urieskenasy/Bootstrap-First-short-project",
            liveVersionUrl: "",
        },
        {
            title: "Studio-speaker-shop",
            imageUrl: "./images/speakershop.png",
            text: "A class study exercise",
            gitHubUrl: "https://github.com/urieskenasy/Studio-speaker-shop",
            liveVersionUrl: "",
        },
    ];

    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    return (
        <>
            <AnimatedPage>
                <h1
                    style={{
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                        marginBottom: "20px;",
                    }}
                >
                    <AnimatedLetters
                        strArray={[
                            "M",
                            "y",
                            " ",
                            "P",
                            "r",
                            "o",
                            "j",
                            "e",
                            "c",
                            "t",
                            "s",
                        ]}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <div className="projects-container">
                    <IoIosArrowBack
                        className="left-arrow"
                        onClick={prevSlide}
                    />
                    <IoIosArrowForward
                        className="right-arrow"
                        onClick={nextSlide}
                    />
                    {projects.map((item, i) => {
                        return (
                            <div className="project-card-container">
                                <div
                                    className="project-BG"
                                    style={{
                                        backgroundImage: `url(${item.imageUrl})`,
                                    }}
                                ></div>
                                <div className="project-card-content">
                                    <h2>{item.title}</h2>
                                    <h3>{item.text}</h3>
                                    <div className="span-container">
                                        <span>
                                            <a href={item.gitHubUrl}>gitHub</a>
                                        </span>
                                        <span>
                                            <a href="">live demo</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                        /* <div
                                className={
                                    i === current ? "slide active" : "slide"
                                }
                                key={i}
                            >
                                {i === current && (
                                    
                                )}
                            </div> */
                    })}
                </div>
            </AnimatedPage>
            <Loader type="ball-grid-pulse" style={{ transform: "scale(2)" }} />
        </>
    );
}

{
    /* {projects.map((item, i) => {
                    return (
                        <div className="project-card-container">
                            <img src={require(`${item.imageUrl}`)} />
                            <h2>{item.title}</h2>
                            <h3>{item.text}</h3>
                            <div className="span-container">
                                <span>
                                    <a href={item.gitHubUrl}>gitHub</a>
                                </span>
                                <span>
                                    <a href="">live demo</a>
                                </span>
                            </div>
                        </div>
                    );
                })} */
}
