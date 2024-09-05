import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 1.25rem;
  font-size: 0.875rem;
  color: #666;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>© 2024 귀로보는세상 - 모두를 위한 접근성</FooterContainer>
  );
};

export default Footer;
