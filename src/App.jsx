import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TextToAudioPage from './pages/TextToAudioPage';
import ReceivedAudioPage from './pages/ReceivedAudioPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/text-to-audio' element={<TextToAudioPage />} />
          <Route path='/received-audio' element={<ReceivedAudioPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
