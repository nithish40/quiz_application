// src/Loginform.js
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Loginform() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  function checkDetails(event) {
    event.preventDefault(); // Prevent default form submission

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSuccess("Login successful!");
          setError('');
          setTimeout(() => {
             navigate(`/user/${data.username}`); // Redirect to the user's personalized page
          }, 1000);
        } else {
          setError("Invalid username or password.");
          setSuccess('');
        }
      })
      .catch(err => {
        console.error('Error during login:', err);
        setError('Error during login');
        setSuccess('');
      });
  }

  return (
    <div>
      <nav>
        <h2>Career Sync</h2>
      </nav>
      <div className="outerlogin">
        <form action="" className="login" onSubmit={checkDetails}>
          <h2 className="bgclr">Signin</h2>
          <input
            type="text"
            placeholder="email or username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="loginbtn" type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
