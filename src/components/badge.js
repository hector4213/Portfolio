import styled from '@emotion/styled';
import React from 'react';
import { flexCenter } from '../components/_shared/styled-mixins';

const StyledBadgeContainer = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
`;
const StyledBadge = styled.span`
  ${flexCenter};
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary-color);
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;

  font-size: 0.7rem;
  font-weight: 700;
  color: var(--title-color);
  line-height: 1;
  padding: calc(var(--radius) / 3) var(--radius);
  border-radius: var(--radius);
  vertical-align: middle;
`;

const Badge = ({ children, content }) => {
  return (
    <StyledBadgeContainer>
      {children}
      <StyledBadge>{content}</StyledBadge>
    </StyledBadgeContainer>
  );
};


export default Badge;
