import React from 'react';
import logo from 'assets/icons/logo.svg';
import 'assets/styles/views/Home.scss';
import Button from 'components/form/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function goLoginPage() {
    navigate('/login');
  }

  return (
    <div className="home-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <h1>롤링롤링 페이퍼</h1>
      </div>
      <Button name="롤링롤링페이퍼 시작하기" onButtonClick={goLoginPage} />
      <div className="hot-paper-list"></div>
    </div>
  );
}

export default Home;
