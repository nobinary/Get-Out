import React from "react";
import "./Input.css";
export const Input = ({ onChange, name, placeholder, required, value }) => (
  <div className="input">
    <input
      value={value}
      name={name}
      required={required}
      onChange={e => onChange(e)}
    />
    <label htmlFor={name}>
      <span>{placeholder}</span>
    </label>
  </div>
);

export const Button = ({ onClick, className, color, title, variant }) => (
	<button
        onClick={onClick}
        className="submit"
        >
		{title}
	</button>
)