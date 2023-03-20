import React from "react";
import styled from "styled-components";
import { dataFieldContainerProps, dataFieldProps } from "../../lib/types";
import DataField from "../DataField";

interface FormDataFieldStackProps {
  dataFieldStackList?: dataFieldProps | any;
  isRef?: boolean;
}

const FormDataFieldStack: React.FC<FormDataFieldStackProps> = ({
  dataFieldStackList = { property: [] },
  isRef,
}) => {
  return (
    <DataFieldContainer
      style={dataFieldStackList.style}
      gap={dataFieldStackList.gap}
      marginTop={dataFieldStackList.marginTop}
      flexDirection={dataFieldStackList.flexDirection}
      margin={dataFieldStackList.margin}
      marginBottom={dataFieldStackList.marginBottom}
      marginLeft={dataFieldStackList.marginLeft}
      marginRight={dataFieldStackList.marginRight}
      justifyContent={dataFieldStackList.justifyContent}
      flexWrap={dataFieldStackList.flexWrap}
    >
      {dataFieldStackList.property.map(
        (
          formField: {
            isEditable?: boolean;
            label: string | undefined;
            type: string | undefined;
            name: React.Key | null | undefined | any;
            defaultValue: string | number | undefined;
            style: object | undefined;
            placeholder: string | undefined;
            width: string | undefined;
            boxWidth: string | undefined;
            alignItems: string | undefined;
            marginLeft: string | undefined;
            marginRight: string | undefined;
            marginTop: string | undefined;
            marginBottom: string | undefined;
            boxHeight: string | undefined;
            paddingRight: string | undefined;
            labelWidth: string | undefined;
            showLabelIcon?: boolean;
            pattern?: string;
            onChange?: () => {};
            step?: string;
            maxValue?: number;
            backgroundColor?: string | undefined;
            borderColor?: string | undefined;
            IsLabel?: boolean;
          },
          index: any
        ) => (
          <DataField
            isEditable={formField.isEditable}
            label={formField.label}
            type={formField.type}
            name={formField.name}
            defaultValue={formField.defaultValue}
            key={formField.name}
            style={formField.style}
            placeholder={formField.placeholder}
            width={formField.width}
            boxWidth={formField.boxWidth}
            alignItems={formField.alignItems}
            marginLeft={formField.marginLeft}
            marginRight={formField.marginRight}
            marginTop={formField.marginTop}
            marginBottom={formField.marginBottom}
            boxHeight={formField.boxHeight}
            paddingRight={formField.paddingRight}
            labelWidth={formField.labelWidth}
            showLabelIcon={formField.showLabelIcon}
            onChange={formField.onChange}
            isRef={isRef}
            pattern={formField.pattern}
            step={formField.step}
            maxValue={formField.maxValue}
            backgroundColor={formField.backgroundColor}
            borderColor={formField.borderColor}
            IsLabel={formField.IsLabel}
          />
        )
      )}
    </DataFieldContainer>
  );
};

export default React.memo(FormDataFieldStack);

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

  gap: ${(props) => (props.gap ? props.gap : "1.8rem")};
`;
