import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 800px;
  min-height: 200px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-sizing: border-box;
  resize: vertical; /* 높이 조정 가능 */

  &:focus {
    outline: none;
    border-color: #0057b7;
  }
`;

const ConvertButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#0057b7')};
  color: white;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#004494')};
  }
`;

const TextToAudio = () => {
  const [text, setText] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = () => {
    if (text.trim()) {
      setIsConverting(true);
      // 음성파일 변환 로직 호출 (API 통신 등)
      // 예시: ChatGPT API 호출을 통한 텍스트 요약 및 음성 변환
      setTimeout(() => {
        setIsConverting(false);
        alert('텍스트가 음성파일로 변환되었습니다!');
      }, 2000); // 예시로 2초 후 변환 완료 처리
    }
  };

  return (
    <Container>
      <Title>텍스트를 입력하면 이해하기 쉽게 요약해 드립니다!</Title>
      <TextArea
        placeholder='여기에 텍스트를 입력하세요...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows='7' // 기본 높이 5줄
      />
      <ConvertButton
        disabled={!text.trim() || isConverting}
        onClick={handleConvert}
      >
        {isConverting ? '변환 중...' : '요약하여 음성파일로 변환하기'}
      </ConvertButton>
    </Container>
  );
};

export default TextToAudio;
