import React from 'react'
import { Link } from 'react-router-dom';

function Layout() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <Link className="navbar-brand" to="/Home" style={{ marginRight: '2rem', fontWeight: 'bold' }}>Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item active px-2">
                        <Link className="nav-link" to="/AddProduct">Product</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/AboutUs">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Layout;