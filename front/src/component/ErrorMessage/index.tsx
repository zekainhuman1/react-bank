import React from 'react';
import "./index.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message">
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
