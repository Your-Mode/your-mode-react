import styled from "styled-components";

interface CustomerProps {
  id: number;
  name: string;
  birth: string;
}

const CustomerItem = ({ id, name, birth }: CustomerProps) => {
  return (
    <>
      <CustomerContainer onClick={() => console.log(id)}>
        <ProfileImage />
        <TextContainer>
          <CustomerName>{name}</CustomerName>
          <CustomerBirth>{birth}</CustomerBirth>
        </TextContainer>
      </CustomerContainer>
      <Divider />
    </>
  );
};

export default CustomerItem;

const CustomerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
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
  font-size: 13px;
  font-weight: bold;
`;

const CustomerBirth = styled.p`
  font-size: 10px;
  font-weight: normal;
  color: #6c6c6c;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
`;
