import React, { useState } from "react";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function registration(event) {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError("Invalid email address");
            return;
        }
        if (password !== secondPassword) {
            setError('Passwords do not match');
            return;
        }
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_name: username, email: email, password: password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setSuccess("Registration successful");
                    setError('');
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 1000);
                } else {
                    setError(data.message || "Registration failed");
                    setSuccess('');
                }
            })
            .catch(err => {
                setError('Registration failed here');
                setSuccess("");
            });
    }

    return (
        <div>
            <nav>
                <h2>Career Sync</h2>
            </nav>
            <div className="outersignup">
                <form className="signup" onSubmit={registration}>
                    <h2 className="bgclr">Signup</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"
                        value={secondPassword}
                        onChange={e => setSecondPassword(e.target.value)}
                    />
                    <button className="register" type="submit">Submit</button>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <p>
                        Have an account? <a href="/login">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
