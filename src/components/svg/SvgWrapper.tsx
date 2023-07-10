import React from 'react';
import styled from 'styled-components';

type SvgWrapperProps = {
  children: React.ReactNode;
};

export default function SvgWrapper({ children }: SvgWrapperProps) {
  return <StyledSvgWrapper>{children}</StyledSvgWrapper>;
}

const StyledSvgWrapper = styled.div`
  padding: 0.5rem;
`;
