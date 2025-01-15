import styled from "styled-components";
import React, { useState } from "react";

const Form = () => {
  const [images, setImages] = useState<string[]>([]); // 이미지 미리보기 URL 저장

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);

      // File 객체를 읽어 Base64 또는 Blob URL로 변환
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setImages(imageUrls);

      // 필요에 따라 File 객체를 서버로 전송할 수도 있음
    }
  };

  return (
    <FormContainer>
      <InputContainer>
        <InputType>전화번호</InputType>
        <Input type="tel" placeholder="예) 01012345678" />
      </InputContainer>
      <InputContainer>
        <InputType>진단 타입</InputType>
        <Input type="text" placeholder="진단받은 타입을 적어주세요." />
      </InputContainer>
      <InputContainer>
        <InputType>메모</InputType>
        <TextArea placeholder="메모를 적어주세요" />
      </InputContainer>
      <InputContainer>
        <InputType>PDF 파일</InputType>
        <Input type="file" multiple placeholder="첨부파일을 등록하세요" />
      </InputContainer>
      <InputContainer>
        <InputType>이미지</InputType>
        <Label htmlFor="file-upload">{'+ 추가하기'}</Label>
        <Input
          id="file-upload" type="file"
          style={{ display: 'none' }}
          multiple
          alt="image"
          onChange={handleImageChange} />
        <UploadImages>
          {images.map((src, index) => (
            <UploadImage
              key={index}
              src={src}
              alt={`uploaded ${index}`}
            />
          ))}
        </UploadImages>
      </InputContainer>
      <Button onSubmit={() => console.log('저장')}>저장</Button>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const InputType = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 13px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 14px 15px;
  outline: none;
  color: black;
  background-color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14px 15px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  resize: none;
  outline: none;
  font-size: 13px;
  color: black;
  background-color: white;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 14px 15px;
  outline: none;
  background-color: #ff77c6;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const UploadImages = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 10px;
  flex-wrap: wrap;
`;

const UploadImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: 'cover';
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  color: black;
  transition: all 0.3s ease;
`;
