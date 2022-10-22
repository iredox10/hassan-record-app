import React from 'react'

export default function PTag({span,text}) {
  return (
    <div>
      <p>
        <span className="font-bold capitalize">{span}: </span>
        {text}
      </p>
    </div>
  );
}
