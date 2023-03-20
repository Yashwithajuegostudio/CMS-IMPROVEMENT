import React, { useState } from "react";
import styled from "styled-components";
import { ContainerProps, Label } from "../../../styles/globalStyles";
import { AppColors, ROW_DIRECTION } from "../../lib/constant";
import { dropdownContainerProps } from "../../lib/types";
interface DropdownProps extends dropdownContainerProps, ContainerProps {
  dataList?: any;
  label: string;
  onChange?: Function;
  value?: string | any;
  defaultValue?: string | any;
  flexDirection?: "row" | "column";
  boxWidth?: string;
  name?: string;
  style?: object;
  alignItems?: string;
  width?: string;
  marginLeft?: string;
  multiple?: boolean;
  isHandleOutRequired?: boolean;
  labelWidth?: string;
  onChangeHandler?: (
    value: React.ChangeEvent<HTMLInputElement> | string
  ) => void;
}

const DropDown: React.FC<DropdownProps> = ({
  dataList = [],
  label,
  name = "",
  value,
  onChange = () => {},
  isHandleOutRequired = false,
  flexDirection = ROW_DIRECTION,
  boxWidth = "",
  style = {},
  alignItems = "",
  gap = "2rem",
  textAlign = "left",
  width = "",
  marginLeft = "",
  multiple = false,
  labelWidth = "",
  defaultValue,
  onChangeHandler = () => {},
}) => {
  const [selectValue, setSelectValue] = useState<string | undefined | any>(
    value
  );

  const handleDropDownChange = (val: string | any) => {
    setSelectValue(val);
    if (isHandleOutRequired) {
      onChange(val);
    }
    onChangeHandler(val);
  };

  return (
    <DropdownContainer
      style={style}
      flexDirection={flexDirection}
      alignItems={alignItems}
      gap={gap}
      width={width}
      marginLeft={marginLeft}
    >
      <Label
        direction={flexDirection}
        textAlign={textAlign}
        labelWidth={labelWidth}
      >
        {label}
      </Label>
      <Select
        defaultValue={defaultValue}
        boxWidth={boxWidth}
        name={name}
        multiple={multiple}
        onChange={(e) => {
          handleDropDownChange(e.target.value);
        }}
      >
        {dataList?.map(
          (data: any, index: React.Key | null | undefined | object | any) => (
            <option value={data.value} key={index}>
              {data.label}
            </option>
          )
        )}
      </Select>
    </DropdownContainer>
  );
};

export default React.memo(DropDown);

interface SelectProps {
  boxWidth?: string;
}

const Select = styled.select<SelectProps>`
  height: 2.3rem !important;
  padding: 0.3rem 0.7rem;
  border-radius: 1.5rem;
  border: 1px solid ${AppColors.DarkShadeGrey};
  font-size: 0.9rem;
  height: 2rem;
  background-color: ${AppColors.White};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: ${(props) =>
    props.boxWidth === "full"
      ? "100%"
      : props.boxWidth
      ? props.boxWidth
      : "20rem"};
  option {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
    border: 1px solid ${AppColors.DarkShadeGrey};
  }
`;

const DropdownContainer = styled.div<dropdownContainerProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  gap: ${(props) => (props.gap ? props.gap : "0rem")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: space-between;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
`;
