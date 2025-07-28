import React from "react";

const Input = ({
  label,
  icon,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  placeholder,
  ...props
}) => (
  <div className="w-full">
    {label && (
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
    )}
    <div
      className={`flex items-center border rounded-md px-3 py-2 gap-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : "border-gray-300"
      }`}
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        required={required}
        disabled={disabled}
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        {...props}
      />
    </div>
  </div>
);

export default Input;
