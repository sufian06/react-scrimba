import React from "react";
import ReactDOM from "react-dom";

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" alt="Logo" width="40px" />
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