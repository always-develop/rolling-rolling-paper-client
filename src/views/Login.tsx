import React from 'react';
import 'assets/styles/views/Home.scss';
import Button from 'components/form/Button';

function Login() {
  function goLoginPage() {
    console.log('ddd');
  }

  return (
    <div className="home-wrapper">
      <Button name="로그인" onButtonClick={goLoginPage} />
    </div>
  );
}

export default Login;
