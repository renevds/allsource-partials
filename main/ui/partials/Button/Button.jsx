import React from 'react';

//Style
import "./button.css";

export const Button = (props) => {
  const { title, type, className, src, onClick, name, value , style} = props;

  return (
    <button
      name={name}
      value={value}
      onClick={onClick}
      className={className}
      type={type}
      title={title}
      style={style}
    >
      {!!src ? (
        <>
          <img className="button__icon" src={src} />
          <span className="button__title">{title}</span>
        </>
      ) : (
        <span className="button__title__only">{title}</span>
      )}
    </button>
  );
};

Button.defaultProps = {
  title: "Click me",
  type: "submit",
  className: "normal",
};