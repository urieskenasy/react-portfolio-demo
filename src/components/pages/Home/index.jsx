import React, { useState, useEffect } from "react";
import "./home.scss";
import "../../../App.scss";
import AnimatedPage from "../../AnimatedPage";
import Loader from "react-loaders";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
import Sparkle from "react-sparkle";
export default function Home() {
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
                    <Sparkle
                        fadeOutSpeed={2}
                        flickerSpeed={"normal"}
                        flicker={false}
                        
                    />
                    <div className="h1-p-container">
                        <h1 className="homePage-h1">
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
                    <div
                        className="logo-container"
                        style={{ position: "relative" }}
                    >
                        <svg
                            width="200mm"
                            height="180mm"
                            version="1.1"
                            viewBox="0 0 210 210"
                            opacity="0.7"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="#ffd700">
                                <path
                                    d="m45.198 100.76q1.1832-4e-3 2.5816 0.31256 1.3984 0.31663 1.3984 1.0666 0 0.39286-0.43027 0.71575-0.43028 0.2872-1.6135 0.71982-1.1833 0.43263-2.3665 0.79383-1.1833 0.3612-3.8725 1.1204-2.5816 0.75884-4.733 1.4448l-11.617 3.647q-4.8406 1.5523-5.7011 2.341 0.43028 0.71279 8.0676 3.6151 7.7449 2.902 12.048 3.8515 9.1433 2.0757 9.1433 3.2186 0 0.5-1.9362 1.1852-1.8287 0.68483-3.7649 0.69148-1.8287 6e-3 -3.0119-0.70394-1.1832-0.53166-6.9919-1.8331-8.713-2.0058-17.103-5.2984-8.2828-3.3287-8.2828-4.9715 0-1.1071 10.757-4.4297l16.781-5.0932q7.96-2.3844 10.649-2.3937z"
                                    stroke-width="1.6934"
                                />
                                <path
                                    d="m76.209 85.392q0-1.0784 0.92026-1.5496 0.9744-0.52307 1.6781-0.52997 1.4075-0.0138 2.3277 1.5691 0.9744 1.531 1.5699 3.5792 0.59546 1.9969 0.92026 2.3531 0.70373 0.86608 0.70373 5.2823 0 4.7243-0.812 8.8404-0.812 4.0647-2.1112 6.9018-1.2992 2.837-3.0315 5.1135-1.6781 2.2759-3.4104 3.6794-1.7323 1.3521-3.5187 2.294-1.7864 0.89049-3.1397 1.2119-1.2992 0.37219-2.2736 0.38174-1.8405 0.018-4.2765-0.77968-2.436-0.8491-3.8435-2.0677-2.5984-2.3367-3.9517-13.826-1.2992-11.541-1.2992-18.474 0-2.3108 0.3248-3.2383 0.37893-0.97938 1.624-1.6078 0.54133-0.21072 0.812-0.21337 1.6781-0.01645 2.1653 4.0869 0.05412 0.71838 0.21653 2.5654 0.70374 8.5174 2.1112 17.387 1.4075 8.8186 2.3277 9.9907l0.10826 0.15299q0.10826 0.15299 0.1624 0.30651 0.10827 0.10165 0.3248 0.25358 0.21653 0.15193 0.43307 0.30386 0.27067 0.10007 0.6496 0.19904 0.43307 0.0472 0.92027 0.0424 1.8947-0.0186 4.7637-1.69 3.3021-1.881 5.1968-4.6726 1.8947-2.8429 3.248-7.7346 1.1909-4.1711 1.1909-7.4576 0-2.6189-0.75787-5.3331-0.75787-2.7142-1.5157-4.6068-0.75787-1.9439-0.75787-2.7142z"
                                    stroke-width="1.4405"
                                />
                                <g stroke-width="1.1217">
                                    <path d="m103.96 106.39q0.89675-7e-3 1.5575 0.30924 0.66077 0.28055 0.84955 0.56478 0.23599 0.28387 0.23599 0.49815 0 0.71428-2.1711 1.3384-2.879 0.84394-6.2773 4.0848-3.351 3.2405-4.059 6.0674-0.89675 3.6141-1.5103 4.7975-0.61357 1.2191-1.7935 1.2283-0.47197 4e-3 -0.84955-0.1005-0.33038-0.0688-0.56637-0.317-0.23599-0.24815-0.37758-0.42561-0.14159-0.17746-0.28318-0.56921-0.0944-0.42783-0.14159-0.60603 0-0.21428-0.0944-0.67782-0.04718-0.49963-0.04718-0.60677-1.1327-8.3482-1.1327-14.027 0-1.1786 0.18879-1.8229 0.18879-0.68004 0.94395-1.1859 0.47197-0.32512 1.0383-0.32955 0.61357-5e-3 1.0383 0.38474 0.42478 0.35382 0.42478 0.96095 0 1.3214 0.47197 3.7463 0.51917 2.3888 0.94395 3.7426 0.37758-0.39581 1.0855-1.2228 1.7935-2.2283 5.0029-4.0034 3.2094-1.8108 5.5221-1.8289z" />
                                    <path d="m115.48 103.37q0.80236-0.43484 1.5575-0.44074 0.75515-6e-3 1.2743 0.45431 0.75517 1.0655 1.2272 6.2046 0.51918 5.1388 0.51918 9.603 0 3.2142-0.2832 3.645-0.94394 0.57881-2.0295 0.5873-1.6519 0.0129-2.0295-0.73413-0.23599-0.56958-0.75516-7.4226-0.47197-6.8891-0.47197-9.2105 0-2.1786 0.99114-2.6863zm-0.51917-8.353q0.0944-0.67931 0.75516-1.113 0.70797-0.4341 1.3687-0.43927 0.66077-0.0052 1.6991 0.45099 1.0384 0.45616 1.0384 1.2419 0 0.85713-0.56636 1.5401-0.56637 0.683-1.5103 0.69038-0.99115 0.0078-1.8879-0.66381-0.89675-0.70726-0.89675-1.7073z" />
                                    <path d="m125.8 129.01q-1.9351 0.0151-1.9351-1.342 0-0.78571 0.70796-2.0055 0.70796-1.1841 2.4071-3.6259 1.7463-2.4779 3.0678-4.7382l12.271-19.774q0.75518-1.2202 1.2743-2.9742 0.56637-1.7544 1.18-2.4735 0.61357-0.75479 2.0767-0.76623 0.99115-0.0078 1.7463 0.48634 0.80236 0.49372 0.80236 1.3151 0 0.5-0.42479 1.2176-0.37757 0.68151-1.2271 2.0453-0.80236 1.3277-1.4631 2.8686-0.99115 2.0792-5.6637 9.0799-4.6254 6.9647-4.8142 7.5733-0.1888 0.78718-2.4543 4.1263l-4.059 6.1746q-1.0383 1.5795-1.7935 2.1926-0.70795 0.61268-1.6991 0.62043z" />
                                </g>
                                <path
                                    d="m183.62 112.32q-1.9649-0.70095-11.176-2.6445-9.2108-1.9808-16.702-3.8554-7.4915-1.9118-7.4915-2.8422 0-0.59545 2.0878-0.97415 2.0878-0.37871 4.1756-0.38524 1.1053-3e-3 3.8072 0.54632 2.8246 0.54939 4.7896 1.027 1.965 0.47765 2.3334 0.58815 7.0002 1.8761 15.474 3.7848 8.474 1.8715 11.79 2.7543 3.4387 0.88241 3.4387 1.6639 0 0.63267-2.3334 1.7192-2.3334 1.0866-9.3336 3.9741-1.965 0.78769-2.9475 1.2001-3.0702 1.275-6.1406 2.6616-3.0703 1.3494-4.7896 2.0991-1.5965 0.74932-1.7193 0.78692-1.965 1.2343-7.1231 1.2504-2.2106 7e-3 -3.8071-0.32303-1.4737-0.33033-1.4737-0.85134 0-0.66989 2.579-1.7572 2.7018-1.0877 4.1756-1.2784 1.2281-0.18994 10.316-4.2377 9.0881-4.0478 10.071-4.9068z"
                                    stroke-width="1.8471"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <span className="bottom-tag-html">&lt;/html&gt;</span>
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
