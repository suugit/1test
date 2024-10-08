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

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post(
        '/api/register',
        { username, password },
        { withCredentials: true } // 세션 쿠키를 포함
      );

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다.');
        navigate('/login'); // 회원가입 후 로그인 페이지로 이동
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container>
      <h2>회원가입</h2>
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
        <Input
          type='password'
          placeholder='비밀번호 확인'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <RegisterButton type='submit'>가입하기</RegisterButton>
      </Form>
    </Container>
  );
};

export default RegisterPage;
