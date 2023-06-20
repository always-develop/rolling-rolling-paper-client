import React, { useEffect } from "react";
import "assets/styles/views/Home.scss";

function Login() {
  // <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js" integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC" crossorigin="anonymous"></script>
  // <script>
  //   Kakao.init('%KAKAO_LOGIN_KEY%');
  //   Kakao.isInitialized();
  // </script>
  const loginByKakao = () => {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', 'https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js');
    scriptTag.setAttribute('integrity', 'sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC');
    scriptTag.setAttribute('crossorigin', 'anonymous');
    document.querySelector('head')?.appendChild(scriptTag);

    // scriptTag.onload = () => {
    //   Kakao.init(process.env.KAKAO_LOGIN_KEY);
    // }
  };

  useEffect(() => {
    loginByKakao();
  }, []);

  return (
    <div className="home-wrapper">
      <button>카카오톡 로그인하기</button>
    </div>
  );
}

export default Login;
