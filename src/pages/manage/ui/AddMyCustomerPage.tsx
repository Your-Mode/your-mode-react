import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import { useNavigate } from "react-router";
import IcPrev from "@icon/ic_prev.svg";
import styled from "styled-components";
import IcAddPhoto from "@icon/ic_add_photo.svg";
import Form from "@pages/manage/components/Form.tsx";
import React, { useState } from "react";

export const AddMyCustomerPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = { icon: IcPrev, onClick: () => navigate(-1) };
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreview(URL.createObjectURL(file)); // 선택된 파일의 URL 생성
    }
  };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="프로필" />
      <Container>
        <ProfileContainer>
          <Label htmlFor="profile-upload">
            {preview ? (
              <ImagePreview src={preview} alt="profile preview" />
            ) : (
              <img src={IcAddPhoto} alt="photo" />
            )}
          </Label>
          <InputName placeholder="이름을 작성하세요" />
          <Input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </ProfileContainer>
        <Form />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const InputName = styled.input`
  font-size: 16px;
  font-weight: bold;
  outline: none;
  background-color: white;
  border: none;
  color: black;
`;

const Label = styled.label`
  width: 70px;
  height: 70px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  display: none; /* input 숨기기 */
`;

const ImagePreview = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;


