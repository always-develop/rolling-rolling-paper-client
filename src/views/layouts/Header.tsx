import React from "react";
// import "assets/styles/layouts/Header.scss";
import styled from "styled-components";
import BackButton from "components/svg/BackButton";
import Alram from "components/svg/Alram";
import Hamburger from "components/svg/Hamburger";

type HeaderProps = {
  title: string;
};

function Header(props: HeaderProps) {
  return (
    <StyledHeader className="header">
      <BackButton />
      <span className="header-title">{props.title}</span>
      <div className="header-right-side">
        <Alram />
        <Hamburger />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  max-width: 42rem;
  height: 5.6rem;
  padding: 0 0.4rem;
  background-color: var(--neutral-100);
  border-bottom: 0.1rem solid var(--neutral70);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
`;
