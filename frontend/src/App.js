import React, { useState } from "react";
import Login from "./components/login.js";
import Register from "./components/registration.js";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Stato per alternare tra login e registrazione

  return (
    <div className="App">
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Registrati</button>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default App;