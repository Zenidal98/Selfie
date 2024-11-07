import React from 'react';

const Register = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input type="text" className="form-control" placeholder="Nome" />
      </div>
      <div className="mb-3">
        <label className="form-label">Cognome</label>
        <input type="text" className="form-control" placeholder="Cognome" />
      </div>
      <div className="mb-3">
        <label className="form-label">Data di Nascita</label>
        <input type="date" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Luogo di Nascita</label>
        <input type="text" className="form-control" placeholder="Luogo di Nascita" />
      </div>
      <div className="mb-3">
        <label className="form-label">Numero di Cellulare</label>
        <input type="tel" className="form-control" placeholder="Numero di Cellulare" />
      </div>
      <div className="mb-3">
        <label className="form-label">Residenza</label>
        <input type="text" className="form-control" placeholder="Residenza" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Registrati</button>
    </form>
  );
};

export default Register;