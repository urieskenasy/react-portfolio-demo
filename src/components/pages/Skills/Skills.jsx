import React, { useState, useEffect } from "react";
import AnimatedPage from "../../AnimatedPage";
import "./skills.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../animatedLetters/AnimatedLetters";
export default function Skills() {
    const skills = [
        "Html",
        "javaScript",
        "css",
        "Sass",
        "Node.js",
        "react",
        "bootstrap",
        "vue.js",
        "python",
    ];
    const imgsUrls = [
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
            title: "Html",
            text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
            title: "javaScript",
            text: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. ",
        },
        {
            url: "https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667",
            title: "css",
            text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
            title: "Sass",
            text: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
            title: "Node.js",
            text: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            title: "react",
            text: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
            title: "bootstrap",
            text: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        },
        {
            url: "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
            title: "vue.js",
            text: "Vue.js is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
            title: "python",
            text: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. ",
        },
    ];
    const [text, setText] = useState();
    const [imgUrl, setImgUrl] = useState();
    const handleMouseEnter = (skill) => {
        const url = imgsUrls.find((item, i) => item.title === skill);
        console.log(url);
        setImgUrl(url.url);
        setText(url.text);
    };
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
            
                <div className="skills-container">    <div className='h1-wrapper'>
                      <h1 className='skills-h1'
                          style={{
                              textAlign: "center",
                          
                                    
                          }}
                      >
                          <AnimatedLetters
                              strArray={[
                                  "M",
                                  "y",
                                  " ",
                                  "S",
                                  "k",
                                  "i",
                                  "l",
                                  "l",
                                  "s",  
                              ]}
                              idx={15}
                              letterClass={letterClass}
                          />
                      </h1>
                </div>
                <div className='content-wrapper'>
                    <div className="skills-container-ul">
                        <ul>
                            {skills.map((item, i) => (
                                <li onMouseEnter={() => handleMouseEnter(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {imgUrl && (
                        <div className="skills-container-images">
                            <img src={imgUrl} />
                            <span className="skills-span">{text}</span>
                        </div>
                    )}
            
                </div>
                </div>
            </AnimatedPage>
            <Loader type="ball-grid-pulse" style={{transform: 'scale(2)'}} />
        </>
    );
}
