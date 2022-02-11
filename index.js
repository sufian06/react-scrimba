import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));