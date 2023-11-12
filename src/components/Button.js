import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} data-testid="custom-button">
      {label}
    </button>
  );
};

export default Button;
