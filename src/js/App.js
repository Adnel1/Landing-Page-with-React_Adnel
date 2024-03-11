//import react into the bundle
import React, { useState, useEffect } from "react";

//import your own components
import Navbar from "./component/navbar.jsx";
import Home from "./component/home.jsx";
import Footer from "./component/footer.jsx";
import CreativeMode from "./component/creativeMode.jsx";

function App() {
    const [view, setView] = useState(localStorage.getItem("view") || "home");

    console.log(localStorage.getItem("view") || "Nothing stored"); // Just to check
    useEffect(() => localStorage.setItem("view", view), [view]);

    
    return (
        <>
        <Navbar setView = {setView}/>
        {view === "home" ? <Home /> : <CreativeMode />}
        <Footer />
        </>
    )
}

export default App;