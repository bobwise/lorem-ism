import React from 'react';

function ExampleContainer(props) {
  return (
    <div className="sprizzle-o-ContentGrouping">
      <h2 className="sprizzle-b-h2">{props.heading}</h2>
      {props.children}
    </div>
  );
}

export default ExampleContainer;