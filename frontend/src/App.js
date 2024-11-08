import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Stato per alternare tra login e registrazione

  return (
    <div className="App">
      {/* Header con titolo */}
      <div className="header">
        <h1 className="text-primary">Selfie</h1>
        <p className="text-muted">l'applicazione fatta da studenti per gli studenti, a cura di Francesco Passarella</p>
      </div>

      <div className="container mt-5">
        <div className="text-center mb-4">
          <button
            className={`btn ${isLogin ? 'btn-primary' : 'btn-secondary'} mx-2`}    //per far cambiare fra blu e bianco
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${!isLogin ? 'btn-primary' : 'btn-secondary'} mx-2`}
            onClick={() => setIsLogin(false)}
          >
            Registrati
          </button>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              {isLogin ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;