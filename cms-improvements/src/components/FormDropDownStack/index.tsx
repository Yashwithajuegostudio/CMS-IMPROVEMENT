import React from "react";
import styled from "styled-components";
import { dropdownContainerProps, dropDownFieldProps } from "../../lib/types";
import DropDown from "../DropDown";

interface FormDropDownStackProps {
  dropDownStackList?: dropDownFieldProps;
}

const FormDropDownStack: React.FC<FormDropDownStackProps> = ({
  dropDownStackList = {
    property: [],
  },
}) => {
  return (
    <DropDownContainer
      style={dropDownStackList.style}
      gap={dropDownStackList.gap}
      justifyContent={dropDownStackList.justifyContent}
      flexDirection={dropDownStackList.flexDirection}
      marginTop={dropDownStackList.marginTop}
      flexWrap={dropDownStackList.flexWrap}
      marginLeft={dropDownStackList.marginLeft}
    >
      {dropDownStackList.property.map((dropDownField, index) => (
        <DropDown
          label={dropDownField.label}
          name={dropDownField.name}
          value={dropDownField.value}
          dataList={dropDownField.dataList}
          style={dropDownField.style}
          key={index}
          flexDirection={dropDownField.flexDirection}
          alignItems={dropDownField.alignItems}
          gap={dropDownField.gap}
          textAlign={dropDownField.textAlign}
          width={dropDownField.width}
          marginLeft={dropDownField.marginLeft}
          boxWidth={dropDownField.boxWidth}
          multiple={dropDownField.multiple}
          labelWidth={dropDownField.labelWidth}
          onChangeHandler={dropDownField.onChangeHandler}
          defaultValue={dropDownField.defaultValue}
        />
      ))}
    </DropDownContainer>
  );
};

export default React.memo(FormDropDownStack);

const DropDownContainer = styled.div<dropdownContainerProps>`
  display: flex;
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "no-wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "1rem")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
  width: ${(prop) => (prop.width ? prop.width : "100%")};
`;
