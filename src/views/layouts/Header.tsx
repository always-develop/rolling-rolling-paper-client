import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import BackButton from 'components/svg/BackButton';
import Alram from 'components/svg/Alram';
import Hamburger from 'components/svg/Hamburger';

type HeaderProps = {
  title: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  actionName?: string;
};

function Header(props: HeaderProps) {
  function headerTitle() {
    if (!props.actionName) {
      return <span className="header-title">{props.title}</span>;
    }
    return '';
  }

  function rightSide() {
    if (props.actionName) {
      return (
        <StyledButton onClick={props.onButtonClick}>
          {props.actionName}
        </StyledButton>
      );
    }
    return (
      <>
        <Alram />
        <Hamburger />
      </>
    );
  }

  return (
    <StyledHeader>
      <BackButton />
      {headerTitle()}
      <StyledRightSide>{rightSide()}</StyledRightSide>
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

  font-size: 2.2rem;
`;

const StyledRightSide = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  color: var(--text-default, #272626);
  padding: 0 2rem 0 2rem;
`;
