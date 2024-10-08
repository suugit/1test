import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 10rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 23rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-color: #0057b7;
  }
`;

const LoginButton = styled.button`
  padding: 0.75rem;
  font-size: 1.125rem;
  background-color: #ff6464;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4c4c;
  }
`;

const RegisterButton = styled.button`
  padding: 0.75rem;
  font-size: 1.125rem;
  background-color: #0057b7;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #004494;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/login',
        { username, password },
        { withCredentials: true } // 세션 쿠키를 포함
      );

      if (response.status === 200) {
        navigate('/received-audio'); // 로그인 성공 후 리다이렉트
      } else {
        alert('로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegisterClick = () => {
    navigate('/register'); // 회원가입 페이지로 이동
  };

  return (
    <Container>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='아이디'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type='submit'>로그인</LoginButton>
        <RegisterButton type='button' onClick={handleRegisterClick}>
          회원가입
        </RegisterButton>
      </Form>
    </Container>
  );
};

export default LoginPage;
