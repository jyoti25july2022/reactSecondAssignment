import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent message="Hello from Parent!" />
    </div>
  );
};

export default ParentComponent;
