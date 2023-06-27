import React from 'react';
import 'assets/styles/views/SignUp.scss';

function SignUp() {
  const code = new URL(window.location.href).searchParams.get('code');

  console.log('code', code);

  return <div className="signup-wrapper">닉네임 입력</div>;
}

export default SignUp;
