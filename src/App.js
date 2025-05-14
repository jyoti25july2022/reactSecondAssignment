import React from 'react';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import DataFetcher from './Components/DataFetcher';

function App() {
  return (
    <div>
      <ParentComponent />
      <Counter />
      <DataFetcher />
    </div>
  );
}

export default App;
