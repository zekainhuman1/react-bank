import React, { useState } from 'react';
import "./index.css";
import eyeSvg from '../../assets/svg/eye.svg';
import eyeHideSvg from '../../assets/svg/eye-hide.svg';

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <label htmlFor="password">Password</label>
      <div className="password-input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Pass2000ID"
          required
          className="input"
        />
        <button
          type="button"
          className={`toggle-password ${showPassword ? 'show' : 'hide'}`}
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={showPassword ? eyeHideSvg : eyeSvg} alt={showPassword ? 'Hide password' : 'Show password'} />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
