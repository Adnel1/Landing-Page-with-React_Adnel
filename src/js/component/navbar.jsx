import React from 'react';

const Navbar = () => {
    return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-4">
            <div className="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav text-white">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
	);
}

export default Navbar;