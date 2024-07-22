import React from 'react';
import "./index.css";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
  return (
    <div className="input-container">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        placeholder="example@gmail.com"
        required
      />
    </div>
  );
};

export default EmailInput;
