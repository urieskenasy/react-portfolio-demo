import React from "react";
import "./home.css";
import AnimatedPage from "../../AnimatedPage";
export default function () {
    return (
        <AnimatedPage>
            <div className="home-container">
                <div className="h1-p-container">
                    <h1>welcome to my website</h1>
                </div>
                <div className="home-image-container">
                    <div className="p-container">
                        <p>
                            My name is Uri Eskenasy. I am 27 years old Fullstack
                            Developer. I love taking new challenges and fullfil
                            my clients digital desires. i love solve problems
                            and rejuvenate old projects.
                        </p>
                        <p>
                            {" "}
                            I happily invite you to dive into my portfolio
                            website. Here you can find all the information about
                            me, my expertise, my skills, my experience and past
                            projects i have made.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
