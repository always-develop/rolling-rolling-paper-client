import React, { useEffect, useState } from 'react';
import logo from 'assets/icons/logo.svg';
import 'assets/styles/views/Home.scss';
import '@splidejs/react-splide/css';
import Button from 'components/form/Button';
import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProfileImage from 'components/ProfileImage';

type RollingPaper = {
  profileUrl: string,
  name: string,
}

function Home() {
  const navigate = useNavigate();

  const [hotRollingPaperList, setList] = useState<RollingPaper[]>([]);

  const handlerList = () => {
    fetch('hot-rolling-paper-list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
    .then((data) => {
      setList(data);
    })
  }

  useEffect(() => {
    handlerList();
  }, []);

  function goLoginPage() {
    navigate('/login');
  }

  const hotPaperListTemplate = hotRollingPaperList.map((person, index) => (
    <SplideSlide key={index}>
      <ProfileImage url={person.profileUrl} />
      <span>{person.name}</span>
    </SplideSlide>
  ));

  return (
    <div className="home-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <h1>롤링롤링 페이퍼</h1>
      </div>
      <Button name="롤링롤링페이퍼 시작하기" onButtonClick={goLoginPage} />
      <div className="hot-paper-list">
        <Splide
          aria-label="Hot Rolling Paper Slider"
          data-splide='{"type":"loop","perPage":3, "speed": 600, "fixedWidth": "10rem", "autoplay": true, "pauseOnHover": true, "pagination": false, "arrows": false, "gap": "1rem"}'
        >
          {hotPaperListTemplate}
        </Splide>
      </div>
    </div>
  );
}

export default Home;
