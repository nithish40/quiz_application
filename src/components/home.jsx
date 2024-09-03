import React from "react";
import './home.css';
import Card from "./card";
function Home(){
    function signup(){
        window.location.href="/signup"
    }
    function login(){
        window.location.href="/login"
    }

    return(
        <div>
            <header>
                <nav>
                    <h2>Career Sync</h2>
                    <div >
                        <button onClick={signup} className="btn">Signup</button>
                        <button onClick={login} className="btn">Login</button>
                    </div>
                </nav>
            </header>
            <div className="main">
                <div className="info">
                    <h1>Unlock your Career Now</h1>
                    <p>Explore the opertunities accross the world and get placed accrodingly.</p>
                </div>
                <div className="couses">
                </div>
            </div>
        </div>
    )
}

export default Home;