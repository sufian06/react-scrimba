import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="nav-logo" src="./react-logo.png" alt="Logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to Learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Sufian development. All rights reserved.</small>
        </footer>
    );
}

function Page () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));