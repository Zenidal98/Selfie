import React from 'react';

const Login = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Numero di Cellulare</label>
        <input type="tel" className="form-control" placeholder="Numero di Cellulare" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
};

export default Login;