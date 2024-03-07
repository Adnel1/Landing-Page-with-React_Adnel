//import react into the bundle
import React from "react";

//import your own components
import Navbar from "./component/navbar.jsx";
import Home from "./component/home.jsx";
import Footer from "./component/footer.jsx";

function App() {
    return (
        <>
        <Navbar />
        <Home />
        <Footer />
        </>
    )
}

export default App;