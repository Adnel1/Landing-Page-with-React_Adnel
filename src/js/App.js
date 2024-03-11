//import react into the bundle
import React from "react";
import React, { useState } from "react";

//import your own components
import Navbar from "./component/navbar.jsx";
import Home from "./component/home.jsx";
import Footer from "./component/footer.jsx";

function App() {
    const [view, setView] = useState("home")
    return (
        <>
        <Navbar setView = {setView}/>
        {setView === "home" ? <Home /> : <creativeMode />}
        <Footer />
        </>
    )
}

export default App;