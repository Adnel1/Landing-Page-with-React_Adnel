//import react into the bundle
import React, { useState } from "react";

//import your own components
import Navbar from "./component/navbar.jsx";
import Home from "./component/home.jsx";
import Footer from "./component/footer.jsx";
import CreativeMode from "./component/creativeMode.jsx";

function App() {
    const [view, setView] = useState("home")
    return (
        <>
        <Navbar setView = {setView}/>
        {view === "home" ? <Home /> : <CreativeMode />}
        <Footer />
        </>
    )
}

export default App;