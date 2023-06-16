import React from 'react';
import 'assets/styles/views/Home.scss';
import Button from 'components/form/Button';
import Input from 'components/form/Input';

function Login() {
  function postLogin() {
    console.log('ddd');
  }

  return (
    <div className="home-wrapper">
      <Input
        id="loginId"
        labelName="아이디"
        placeholder="아이디를 입력해주세요."
      />
      <Input
        id="loginPassword"
        labelName="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
      <Button name="로그인" onButtonClick={postLogin} />
    </div>
  );
}

export default Login;
