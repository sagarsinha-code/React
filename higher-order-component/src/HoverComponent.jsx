import React from 'react';
import UpdatedComponent from './UpdatedComponent';

function HoverComponent(props) {

  return (
    <div>
      <h1 onMouseOver={props.increment}>Hovered on me {props.count} times</h1>
    </div>
  )
}

export default UpdatedComponent(HoverComponent);
