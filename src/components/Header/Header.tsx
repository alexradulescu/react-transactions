import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">
                <span className="text-primary">Bank</span>Assistant
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLight" aria-controls="navbarLight" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarLight">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Transactions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/accounts">Accounts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;