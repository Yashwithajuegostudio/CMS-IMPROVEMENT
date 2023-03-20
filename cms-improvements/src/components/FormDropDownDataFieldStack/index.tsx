import React from "react";
import styled from "styled-components";
import {
  dataFieldContainerProps,
  dropDownDataFieldProps
} from "../../lib/types";
import DataField from "../DataField";
import DropDown from "../DropDown";

interface FormDropDownDataFieldStackProps {
  dropDownDataFieldStackList?: dropDownDataFieldProps;
}

const FormDropDownDataFieldStack: React.FC<FormDropDownDataFieldStackProps> = ({
  dropDownDataFieldStackList = { inputProperty: [], dropDownField: [] },
}) => {
  return (
    <DataFieldContainer
      style={dropDownDataFieldStackList.style}
      gap={dropDownDataFieldStackList.gap}
      marginTop={dropDownDataFieldStackList.marginTop}
      flexDirection={dropDownDataFieldStackList.flexDirection}
      margin={dropDownDataFieldStackList.margin}
      marginBottom={dropDownDataFieldStackList.marginBottom}
      marginLeft={dropDownDataFieldStackList.marginLeft}
      marginRight={dropDownDataFieldStackList.marginRight}
      justifyContent={dropDownDataFieldStackList.justifyContent}
      flexWrap={dropDownDataFieldStackList.flexWrap}
    >
      {dropDownDataFieldStackList.dropDownField.map((property, index) => (
        <DropDown
          key={index}
          label={property.label}
          name={property.name}
          value={property.value}
          dataList={property.dataList}
          style={property.style}
          flexDirection={property.flexDirection}
          alignItems={property.alignItems}
          gap={property.gap}
          textAlign={property.textAlign}
          width={property.width}
          marginLeft={property.marginLeft}
          boxWidth={property.boxWidth}
          multiple={property.multiple}
          onChange={property.onChange}
        />
      ))}
      {dropDownDataFieldStackList.inputProperty.map((property, index) => (
        <DataField
          key={index}
          label={property.label}
          labelWidth={property.labelWidth}
          type={property.type}
          name={property.name}
          defaultValue={property.defaultValue}
          style={property.style}
          isEditable={property.isEditable}
          placeholder={property.placeholder}
          width={property.width}
          boxWidth={property.boxWidth}
          alignItems={property.alignItems}
          marginLeft={property.marginLeft}
          marginRight={property.marginRight}
          marginTop={property.marginTop}
          marginBottom={property.marginBottom}
          boxHeight={property.boxHeight}
        />
      ))}
    </DataFieldContainer>
  );
};

export default React.memo(FormDropDownDataFieldStack);

const DataFieldContainer = styled.div<dataFieldContainerProps>`
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  display: flex;
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "no-wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0rem")};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
`;
