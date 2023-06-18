import React, { useRef } from "react";
import "assets/styles/views/Home.scss";
import Button from "components/form/Button";
import Input from "components/form/Input";

function Login() {
  const loginId = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  function postLogin() {
    console.log("loginId", loginId.current!.value);
    console.log("loginId", password.current!.value);
  }

  return (
    <div className="home-wrapper">
      <Input
        id="loginId"
        type="text"
        labelName="아이디"
        placeholder="아이디를 입력해주세요."
        ref={loginId}
      />
      <Input
        id="loginPassword"
        type="password"
        labelName="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        ref={password}
      />
      <Button name="로그인" onButtonClick={postLogin} />
    </div>
  );
}

export default Login;
