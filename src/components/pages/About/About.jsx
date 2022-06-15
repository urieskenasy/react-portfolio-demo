import React from "react";
import "./about.css";
import AnimatedPage from "../../AnimatedPage";
export default function About() {
    return (
        <AnimatedPage>
            <div className="about-container">
                <div className="about-h1-p-container">
                    <div className="about-h1-container">
                        <h1>About Me</h1>
                    </div>
                    <div className="about-p-container">
                        <p>
                            I am a fullstack developer, specialized in web 3
                            technologies as well as building web applications.
                            my main coding languages is javascript, html, css. i
                            work with react, angular, node JS, and the newest
                            designing platforms the market offer. I have 1 year
                            of experience in the industry with one year of
                            certificated study in the field
                        </p>
                        <p>
                            I love meeting new challenges, absorb new ideas, and
                            make amazing collaborations. My state of mind is to
                            never fear from the unknown, and dive quickly as
                            possible into the deep cold water.
                        </p>
                        <p>
                            As of now i am looking for new challenges, projects,
                            and private applications to build. i can build any
                            kind of web app, from shop, to blog, to meditation
                            app or anything else that comes to mind.
                        </p>
                    </div>
                </div>
                <div className="about-img-container"></div>
            </div>
        </AnimatedPage>
    );
}
