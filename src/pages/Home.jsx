import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  width: 100%;
  max-width: 960px;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const UploadButton = styled.label`
  display: inline-block;
  font-size: 2rem; /* 크기 증가 */
  padding: 1.5rem 3rem; /* 버튼 크기 증가 */
  background-color: #0057b7;
  color: white;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #003e9e;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem; /* 모바일에서 버튼 크기 증가 */
    padding: 1rem 2rem;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const UploadInfo = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`;

const DropZone = styled.div`
  border: 2px dashed #ccc;
  padding: 2rem;
  text-align: center;
  color: #666;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;

  &:hover {
    border-color: #0057b7;
  }
`;

const ConvertButton = styled.button`
  font-size: 1.25rem;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#0057b7')};
  color: white;
  border: none;
  border-radius: 0.625rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#003e9e')};
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  }
`;

const Home = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      setFile(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      setFile(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleConvert = () => {
    if (file) {
      alert(`${file.name} 파일이 요약 및 변환됩니다.`);
      // 여기에 파일을 서버로 전송하는 로직을 추가할 수 있습니다.
    }
  };

  return (
    <MainContainer>
      <Title>파일을 업로드하여 이해하기 쉽게 요약해 드립니다!</Title>
      <SubText>
        PDF, 이미지 파일을 업로드하세요. 요약된 내용을 음성 파일로 제공합니다.
      </SubText>

      {/* 파일 선택 버튼 */}
      <UploadButton htmlFor='file-upload'>파일 선택</UploadButton>
      <FileInput
        id='file-upload'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />

      {/* 드래그 앤 드롭 영역 */}
      <DropZone onDrop={handleDrop} onDragOver={handleDragOver}>
        파일을 이곳에 드래그하세요 (한 번에 하나의 이미지 파일만 가능)
      </DropZone>

      {/* 업로드된 파일 정보 */}
      {file && <UploadInfo>선택된 파일: {file.name}</UploadInfo>}

      {/* 요약하여 음성파일로 변환하기 버튼 */}
      <ConvertButton onClick={handleConvert} disabled={!file}>
        요약하여 음성파일로 변환하기
      </ConvertButton>
    </MainContainer>
  );
};

export default Home;
