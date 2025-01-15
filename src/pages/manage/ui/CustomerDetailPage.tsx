import React from "react";
import styled from "styled-components";
import ImgExProfile from "@img/img-ex-profile.png";
import AppBar from "@shared/ui/AppBar.tsx";
import IcPrev from "@icon/ic_prev.svg";
import { useNavigate } from "react-router";

export const CustomerDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const leftHeaderAction = {
    icon: IcPrev,
    onClick: () => {
      navigate(-1);
    },
  };
  return (
    <>
      <Image>
        <AppBar leftHeaderAction={leftHeaderAction} isClear={true} />
      </Image>
      <Container>
        <ProfileContainer>
          <ProfileImage />
          <TextContainer>
            <CustomerName>열정적인 나비</CustomerName>
            <CustomerBirth>2000.01.01</CustomerBirth>
          </TextContainer>
        </ProfileContainer>
        <DetailContainer>
          <Divider />
          <Content>
            <Detail>
              <TextBold>진단 타입</TextBold>
              <TextBold>전화번호</TextBold>
            </Detail>
            <Detail>
              <TextRegular>여름 쿨톤</TextRegular>
              <TextRegular>01012345678</TextRegular>
            </Detail>
          </Content>
          <Divider />
        </DetailContainer>
        <MemoContainer>
          <TextBold>메모</TextBold>
          <TextRegular alignLeft={true}>이 사람은 어떤 사람인가요?</TextRegular>
        </MemoContainer>
        <Divider />
        <PDFContainer>
          <TextBold>PDF</TextBold>
        </PDFContainer>
      </Container>
    </>
  );
};

const Image = styled.div`
  width: 100%;
  height: 35vh;
  object-fit: cover;
  background-size: cover;
  background-image: url(${ImgExProfile});
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px;
  margin-top: 20px;
  gap: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: #00ff99;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const CustomerName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const CustomerBirth = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #6c6c6c;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const TextBold = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const TextRegular = styled.p<{ alignLeft?: boolean }>`
  wrap-option: wrap;
  text-align: ${({ alignLeft }) => (alignLeft ? "left" : "right")};
  font-size: 13px;
  font-weight: normal;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
`;

const MemoContainer = styled.div`
  height: 205px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
