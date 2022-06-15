import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import AnimatedPage from "../../AnimatedPage";
import { AiFillInstagram } from "react-icons/ai";
import "./contact.css";
export default function Contact() {
    return (
        <AnimatedPage>
            <div className="contact-container">
                <h2>here you can contact me via form: </h2>
                <div className="contact-form-container">
                    <form>
                        <label for="name">Full Name</label>
                        <input name="name" required />
                        <label for="subject">Subject</label>
                        <input name="subject" required />
                        <label for="textarea">Your Message</label>
                        <textarea name="textarea" required />
                        <button>send</button>
                    </form>
                </div>
                <h2>here are my social media links:</h2>
                <div className="social-media-container">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/feed/">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/urieskenasy">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedPage>
    );
}
