import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="app-container">
      <div className="container py-5">
        <div className="text-center mb-4">
          <button
            className="btn btn-primary mx-2"
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => setIsLogin(false)}
          >
            Registrati
          </button>
        </div>
        
        <div className="auth-container">
          <div className="auth-card">
            {isLogin ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;