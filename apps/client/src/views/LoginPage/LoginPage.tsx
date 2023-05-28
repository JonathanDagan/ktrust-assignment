import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import { UsersService } from '../../services/uesrs.service';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleLogin = async () => {
    try {
      const usersService = new UsersService();
      const response = await usersService.login(email, password);
      if (response.token) {
        // history.push('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      
      setError('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Username:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;