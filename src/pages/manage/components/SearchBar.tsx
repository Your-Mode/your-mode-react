import IcSearch from "@icon/ic_search.svg";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <InputContainer>
      <img src={IcSearch} alt="search" />
      <Input placeholder="검색어를 입력하세요." />
    </InputContainer>
  );
};

export default SearchBar;

const InputContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 9px 15px;
  gap: 5px;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  font-size: 13px;
  background-color: white;
  border: none;
  color: black;
  outline: none;
`;
