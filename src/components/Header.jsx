import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: #0057b7;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-left: 1.25rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: auto;
  margin-left: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const LoginButton = styled.button`
  font-size: 1rem;
  padding: 0.625rem 1.25rem;
  background-color: #ff6464;
  border: none;
  color: white;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-right: 1.25rem;

  &:hover {
    background-color: #ff4c4c;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const Header = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>귀로보는세상</Logo>
      <NavLinks>
        <NavLink to='/'>파일을 음성파일로 변환</NavLink>
        <NavLink to='/text-to-audio'>텍스트를 음성파일로 변환</NavLink>
        <NavLink to='/received-audio'>나에게 온 음성파일</NavLink>
      </NavLinks>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
