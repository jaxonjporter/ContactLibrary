import React from 'react';

export default function Container(props) {
  
  return (
    <div className="app-container">
      {props.children}
    </div>
  )
}