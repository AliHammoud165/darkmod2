// App.js
import React from 'react';
import { Darkmode } from './component/context';
import Button from'./component/button';
import Body from './component/body';

const App = () => {
  return (
    <Darkmode>
      <Button />
      <Body />
    </Darkmode>
  );
};

export default App;