import React from 'react';

const Navbar = ({setView}) => {
    return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-4">
            <div className="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav text-white">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick = {() => setView("home")} >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick = {() => setView("home")} >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick = {() => setView("home")} >Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick = {() => setView("home")} >Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick = {() => setView("creativeMode")} >Creative Mode</a>
                    </li>
                </ul>
            </div>
        </nav>
	);
}

export default Navbar;