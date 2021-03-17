import React from 'react';
import { Button, Input } from 'antd';

function App() {

  function handler() {
    console.log(1);
  }

  return (
    <div className="App">
      <Input placeholder='输入' />
      <Button type='primary' onClick={handler}>Index</Button>
    </div>
  );
}

export default App;
