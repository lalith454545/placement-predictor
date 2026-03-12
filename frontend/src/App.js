import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className="main">
            <nav className="navigation">
                <button
                    className={currentPage === "home" ? "nav-link active" : "nav-link"}
                    onClick={() => setCurrentPage("home")}
                >
                    Predictor
                </button>
                <button
                    className={currentPage === "about" ? "nav-link active" : "nav-link"}
                    onClick={() => setCurrentPage("about")}
                >
                    About
                </button>
            </nav>

            {currentPage === "home" ? <Home /> : <About />}
        </div>
    );
}

export default App;