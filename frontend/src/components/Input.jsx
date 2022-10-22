import React from 'react'

export default function Input({label,labelText,type,name,id,placeholder,state}) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={label}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="p-2 mt-2 w-full border-2 border-black"
        onChange={state}
      />
    </div>
  );
}
