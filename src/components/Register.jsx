import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro:', { username, email, password });
    // Aquí puedes hacer la lógica para registrar usuario
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input 
          type="email" 
          placeholder="Correo" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
