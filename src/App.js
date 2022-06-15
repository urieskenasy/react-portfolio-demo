import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import { AnimatePresence } from "framer-motion";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Skills from "./components/pages/Skills/Skills.jsx";
import Home from "./components/pages/Home/Home.jsx";
function App() {
    return (
        <div className="App">
            <Nav />
            <main>
                <AnimatePresence exitBeforeEnter>
                    <Routes>
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Skills" element={<Skills />} />
                        <Route path="/Projects" element={<Projects />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<div>404 Not found</div>} />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
