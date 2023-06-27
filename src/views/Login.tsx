import React, { useEffect } from 'react';
import 'assets/styles/views/Home.scss';

function Login() {
  const loginByKakao = () => {
    const redirectUri = 'http://localhost:3000/sign-up';
    const requestUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_LOGIN_KEY}&redirect_uri=${redirectUri}`;

    window.location.href = requestUrl;
  };

  return (
    <div className="home-wrapper">
      <button onClick={loginByKakao}>카카오톡 로그인하기</button>
    </div>
  );
}

export default Login;
