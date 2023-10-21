import React, { useState } from 'react';
import './Form.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    setUsername('');
    setPassword('');
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const blackIconStyle = {
    color: 'black',
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <input
          type="text"
          id="username"
          className="form-input"
          placeholder="Enter Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group-2">
        <input
          type={type}
          id="password"
          name="password"
          className="form-input-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <span className="flex justify-around items-center" onClick={handleToggle}>
          <Icon className=" eye absolute mr-10" icon={icon} size={20} style={blackIconStyle} />
        </span>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Form;