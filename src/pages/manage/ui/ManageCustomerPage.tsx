import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcPrev from "@icon/ic_prev.svg";
import styled from "styled-components";
import SearchBar from "@pages/manage/components/SearchBar.tsx";
import CustomerItem from "@pages/manage/components/CustomerItem.tsx";
import { customers } from "@shared/apis";

export const ManageCustomerPage = () => {
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
