import styled from '@emotion/styled';
import React from 'react';
import Icon from './icon';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledSocialIcons = styled.div`
  display: flex;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      margin: 0.5rem;
      color: var(--title-color);
    }

    &:hover > svg {
      color: var(--primary-color);
    }
  }
`;

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(({ link, name, prefix }) => {
    return (
      <a href={link} key={link} target="_blank" rel="noreferrer" aria-label={`social link to ${link}`}>
        <Icon icon={name} prefix={prefix} />
      </a>
    );
  });

  return (
    <StyledContainer>
      <StyledSocialIcons>{socialIcons}</StyledSocialIcons>
    </StyledContainer>
  );
};


export default SocialIcons;
