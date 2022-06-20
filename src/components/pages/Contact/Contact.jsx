import React, { useState, useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import AnimatedPage from "../../AnimatedPage";
import { AiFillInstagram } from "react-icons/ai";
import "./contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Contact() {
    //
    const [letterClass, setLetterClass] = useState("text-animate");
    //
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);
    //
    const form = useRef();
    //
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2mxv6bl",
                "template_oi6lxpc",
                form.current,
                "WlWPmqkRekKDtErd2"
            )
            .then(
                () => {
                    alert("Message successfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("failed to send the message, please try again : )");
                }
            );
    };
    return (
        <>
            <AnimatedPage>
                <div className="contact-container">
                    <div className="contact-form-social-container">
                        <h1 className="h1-contact-page">
                            <AnimatedLetters
                                strArray={[
                                    "C",
                                    "o",
                                    "n",
                                    "t",
                                    "a",
                                    "c",
                                    "t",
                                    " ",
                                    "M",
                                    "e",
                                ]}
                                idx={15}
                                letterClass={letterClass}
                            />
                        </h1>
                        <div className="contact-form-container">
                            <form ref={form} onSubmit={sendEmail}>
                                <label for="name">Full Name</label>
                                <input
                                    name="name"
                                    required
                                    placeholder="Name"
                                />
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                <label for="subject">Subject</label>
                                <input
                                    name="subject"
                                    required
                                    placeholder="Subject"
                                />
                                <label for="textarea">Your Message</label>
                                <textarea
                                    name="textarea"
                                    required
                                    placeholder="Your Message"
                                />
                                <button>send</button>
                            </form>
                        </div>

                        <div className="social-media-container">
                            <h2>here are my social media links:</h2>
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
                    <div className="info-map">
                        Uri Eskenasy,
                        <br />
                        germany
                        <br />
                        Kleiststrae 37b, 10787, Berlin
                        <br />
                        Germany
                        <br />
                        <span>urieskenasy@gmail.com</span>
                    </div>
                    <div class="map-wrap">
                        <MapContainer
                            center={[52.4998520, 13.3497926]}
                            zoom={15}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[52.4998513, 13.3497922]}>
                                <Popup>
                                    Uri lives here, come for a visit :){" "}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </AnimatedPage>
            <Loader type="ball-grid-pulse" style={{ transform: "scale(2)" }} />
        </>
    );
}
