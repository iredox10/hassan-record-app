import React from 'react'

export default function PTag({span,text}) {
  return (
    <div>
      <p>
        <span className="font-bold text-gray-800 capitalize">{span}: </span>
        {text}
      </p>
    </div>
  );
}
