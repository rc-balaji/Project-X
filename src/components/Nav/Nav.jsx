// jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.png';

export const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">
                <img src={Logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-link"
                            onClick={() => navigate('/home')}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-link"
                            onClick={() => navigate('/detector')}
                        >
                            Detector
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-link"
                            onClick={() => navigate('/scanner')}
                        >
                            Scanner
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-link"
                            onClick={() => navigate('/profile')}
                        >
                            Profile
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-link"
                            onClick={() => navigate('/login')}
                        >
                            Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};