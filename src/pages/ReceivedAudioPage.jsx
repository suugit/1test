import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem; // 패딩을 더 줘서 UI가 더 여유롭게 보이도록 수정
  background-color: #f0f0f0;
  box-sizing: border-box;
  margin-top: 15rem;
`;

const AudioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px; // 너비를 더 키움
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.5rem; // 글자 크기 키움
  margin-bottom: 2rem;
  color: #333;
`;

const AudioMessage = styled.audio`
  width: 100%;
  max-width: 700px; // 오디오 크기도 더 키움
`;

const ReceivedAudioPage = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const testAudioUrl =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    setAudioUrl(testAudioUrl);

    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  }, []);

  return (
    <Container>
      <AudioWrapper>
        <Title>새로운 음성 파일이 도착했습니다!</Title>
        {audioUrl && <AudioMessage ref={audioRef} controls src={audioUrl} />}
      </AudioWrapper>
    </Container>
  );
};

export default ReceivedAudioPage;
