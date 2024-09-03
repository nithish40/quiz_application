import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css"
function Userpage() {
    const { username } = useParams(); // Get the username from the URL
    const [isNavbarVisible, setNavbarVisible] = useState(false); // Manage navbar visibility

    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible); // Toggle the navbar visibility
    };
    function logout(){
        
    }
    return (
        <div>
            <nav>
                <h2 onClick={toggleNavbar} className="username">{username}</h2>
                {isNavbarVisible && (
                    <div className="navbar">
                        <ul>
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/quiz">Quiz</Link></li>
                            <li onClick={logout}><Link to="/">Logout</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
            <div>
                <h1>This is your personalized dashboard</h1>
            </div>
        </div>
    );
}

export default Userpage;
