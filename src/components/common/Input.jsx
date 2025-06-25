import { User } from 'lucide-react'
import React from 'react'

const Input = ({ label, icon, type = "text", defaultValue }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <div className="flex items-center border-b border-gray-300 py-2 gap-2">
      <span>{icon}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={label}
        className="w-full focus:outline-none"
      />
    </div>
  </div>
);

export default Input
