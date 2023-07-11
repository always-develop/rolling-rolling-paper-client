import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

type SvgWrapperProps = {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export default function SvgWrapper(props: SvgWrapperProps) {
  return (
    <StyledSvgWrapper onClick={props.onButtonClick}>
      {props.children}
    </StyledSvgWrapper>
  );
}

const StyledSvgWrapper = styled.button`
  padding: 0.5rem;
`;
