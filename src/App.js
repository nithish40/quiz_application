import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Loginform from './components/loginform';
import Signup from './components/signup';
import Userpage from './components/userpage';
function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Loginform/>}></Route>
          <Route path='/user/:username' element={<Userpage/>}></Route>
        </Routes>
      </Router>
      {/* <table border={1}>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
