import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { AppColors } from "../../lib/constant";
import Input from "../Input";

interface SearchInputProps {
  filter?: string;
  setFilter?: (value: string) => void;
  label: string;
  align: "left" | "right" | "center";
  placeHolder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  filter,
  setFilter,
  label,
  align = "left",
  placeHolder,
}): JSX.Element => {
  return (
    <SearchContainer>
      <Title>{label} &nbsp;</Title>

      <SearchInnerContainer>
        <Input
          type="text"
          // value={filter}
          onChange={() => setFilter}
          align={align}
          placeholder={placeHolder}
        />
        <SearchIcon></SearchIcon>
      </SearchInnerContainer>
    </SearchContainer>
  );
};
export default React.memo(SearchInput);
const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${AppColors.GreyOne};
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1rem;
`;

const SearchInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
