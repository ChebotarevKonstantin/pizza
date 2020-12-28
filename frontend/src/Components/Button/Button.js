import React from 'react';
import style from "./Button.module.css";
function Button({ onClick, children, className }) {
  return (
    <div>
      <button
        className={style[className]}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
