import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to='/'>
        <div>
          <button>Home</button>
        </div>
        </Link>
        <Link to='/About'>
        <div>
          <button>About</button>
        </div>
        </Link>
        <Link to='/Contact'>
        <div>
          <button>Contact</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
