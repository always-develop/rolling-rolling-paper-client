import React from 'react';
import Button from 'components/form/Button';
import Input from 'components/form/Input';
import ModalTest from 'components/ModalTest';

function App() {
  function clickButton() {
    console.log('click!!');
  }

  return (
    <div className="App">
      <Button name="햐이" onButtonClick={clickButton} />
      <Input id="1" placeholder="필수야" />
      <ModalTest />
    </div>
  );
}

export default App;
