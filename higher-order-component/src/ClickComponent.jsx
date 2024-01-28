import React from 'react';
import UpdatedComponent from './UpdatedComponent';

function ClickComponent(props) {

  return (
    <div>
      <button onClick={props.increment}>Button Clicked {props.count}</button>
    </div>
  )
}

export default UpdatedComponent(ClickComponent);
