import React from "react";
import logo from "assets/icons/logo.svg";
import "assets/styles/views/Home.scss";
import "@splidejs/react-splide/css";
import Button from "components/form/Button";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProfileImage from "components/ProfileImage";

import test1 from "assets/images/test1.jpg";
import test2 from "assets/images/test2.png";
import test3 from "assets/images/test3.png";
import test4 from "assets/images/test4.jpg";
import test5 from "assets/images/test5.png";

function Home() {
  const navigate = useNavigate();

  function goLoginPage() {
    navigate("/login");
  }

  const hotPaperList = [
    {
      profileUrl: test1,
      name: "김기역",
    },
    {
      profileUrl: test2,
      name: "이상해씨",
    },
    {
      profileUrl: test3,
      name: "최디귿",
    },
    {
      profileUrl: test4,
      name: "박산다라마바사",
    },
    {
      profileUrl: test5,
      name: "한동글동글",
    },
  ];

  const hotPaperListTemplate = hotPaperList.map((person) => (
    <SplideSlide>
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
        <Splide options={{ rewind: true }} aria-label="React Splide Example">
          {hotPaperListTemplate}
        </Splide>
      </div>
    </div>
  );
}

export default Home;
