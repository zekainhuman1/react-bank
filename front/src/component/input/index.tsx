import React, { useState } from 'react';
import "./index.css";
import eyeSvg from '../../assets/svg/eye.svg';
import eyeHideSvg from '../../assets/svg/eye-hide.svg';

interface TextInputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type: 'email' | 'password' | 'text';
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, setValue, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="input-container">
      <label htmlFor={type}>{label}</label>
      <div className="text-input-wrapper">
        <input
          type={isPassword && showPassword ? 'text' : type}
          id={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          required
          className="input"
        />
        {isPassword && (
          <button
            type="button"
            className={`toggle-password ${showPassword ? 'show' : 'hide'}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={showPassword ? eyeHideSvg : eyeSvg} alt={showPassword ? 'Hide password' : 'Show password'} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
