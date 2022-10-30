import React from 'react'

export default function Input({label,labelText,type,name,id,placeholder,state,value}) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={label} className='font-bold capitalize'>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={state}
        value={value}
        className="p-2 mt-2 w-full border-2 border-black capitalize"
      />
    </div>
  );
}
