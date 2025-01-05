import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcPrev from "@icon/ic_prev.svg";
import styled from "styled-components";
import SearchBar from "@pages/manage/components/SearchBar.tsx";
import CustomerItem from "@pages/manage/components/CustomerItem.tsx";
import { customers } from "@shared/apis";
import IcPlus from "@icon/ic_plus.svg";
import { useNavigate } from "react-router";

export const ManageCustomerPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcPrev, onClick: () => {
    },
  };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title="나의 고객" />
      <Container>
        <SearchBar />
        <ListContainer>
          {customers.map((customer) => (
            <CustomerItem key={customer.id} {...customer} />
          ))}
        </ListContainer>
      </Container>
      <AddButton onClick={() => navigate('/add-customer')}>
        <img src={IcPlus} alt='plus'/>
      </AddButton>
    </>
  );
};

const Container = styled.div`
  padding: 15px 18px 0 18px;
  overflow : auto;
`;

const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff77c6;
`;
