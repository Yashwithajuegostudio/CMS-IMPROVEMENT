import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../../styles/globalStyles";
import {
  AppColors,
  FULL_WIDTH,
  MAX_INPUT_FIELD_LENGTH,
  MAX_NUMBER_LIMIT,
  ROW_DIRECTION,
  TWO_DECIMAL_PLACES,
} from "../../lib/constant";
import { dataFieldStyleProps } from "../../lib/types";
interface DataFieldProps {
  label?: string;
  type?: string;
  index?: number;
  name?: string;
  onChange?: Function;
  handleFocusOut?: (value: string, index: number) => void;
  defaultValue?: string | number;
  isChecked?: boolean;
  width?: string;
  direction?: "row" | "column";
  textAlign?: "left" | "right";
  isEditable?: boolean;
  style?: object;
  placeholder?: string;
  alignItems?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  justifyContent?: string;
  boxWidth?: string;
  boxHeight?: string;
  flexDirection?: string;
  paddingRight?: string;
  labelWidth?: string;
  showLabelIcon?: boolean;
  isRef?: boolean;
  pattern?: string;
  step?: string;
  maxValue?: number;
  decimal?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  IsLabel?: boolean;
}

const DataField: React.FC<DataFieldProps> = ({
  label = "",
  type = "text",
  index = 0,
  name = "name",
  defaultValue = "",
  isChecked,
  width = "",
  direction = ROW_DIRECTION,
  textAlign = "left",
  isEditable = true,
  style = {},
  placeholder = "",
  alignItems = "center",
  marginLeft = "0rem",
  marginRight = "0rem",
  marginTop = "0rem",
  marginBottom = "0rem",
  justifyContent = "space-between",
  boxWidth = FULL_WIDTH,
  boxHeight = "auto",
  flexDirection = "",
  paddingRight = "",
  labelWidth = "",
  handleFocusOut = () => {},
  showLabelIcon = false,
  onChange = () => {},
  isRef,
  pattern,
  step,
  maxValue = 0,
  decimal = false,
  backgroundColor,
  borderColor,
  IsLabel,
}) => {
  const [inputVal, setInputVal] = useState<string | number>(
    defaultValue || (type === "number" ? 0 : "")
  );

  useEffect(() => {
    setInputVal(defaultValue);
  }, [defaultValue, isRef]);

  const focusOut = (val: string) => {
    handleFocusOut(val, index);
  };
  const handleInputChange = (val: string) => {
    let inputData: string | number | Date = val;

    if (type === "number") {
      if (
        (Number(val) >= 0 && val.length < MAX_NUMBER_LIMIT && !maxValue) ||
        (maxValue && Number(val) <= maxValue)
      ) {
        if (step === TWO_DECIMAL_PLACES) {
          const validated = val.match(/^(\d*\.{0,1}\d{0,2}$)/);
          if (validated) {
            setInputVal(val);
          }
        } else if (step === "1") {
          const validated = val.match(/^(\d*$)/);
          if (validated) {
            setInputVal(val);
          }
        } else {
          setInputVal(val);
        }
      } else {
        inputData = inputVal;
        setInputVal(inputVal);
      }
    } else {
      setInputVal(val);
    }
    onChange(inputData);
  };

  return (
    <DataFieldContainer
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      width={width}
      flexDirection={flexDirection}
      labelWidth={labelWidth}
    >
      {label && (
        <Label
          direction={direction}
          textAlign={textAlign}
          labelWidth={labelWidth}
        >
          {label}
          {showLabelIcon && (
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                alignSelf: "flex-end",
                fontSize: "1rem",
                marginLeft: "1rem",
                color: "black",
              }}
            />
          )}
        </Label>
      )}
      {type === "textArea" ? (
        <TextAreaField
          value={inputVal}
          name={name}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={(e) => focusOut(e.target.value)}
          boxWidth={boxWidth}
          readOnly={!isEditable}
          boxHeight={boxHeight}
          paddingRight={paddingRight}
        />
      ) : (
        <>
          {IsLabel ? (
            <>
              <FormInputContainer>
                <InputLabel>min</InputLabel>
                <InputField
                  type={type}
                  name={name}
                  defaultValue={inputVal}
                  value={inputVal}
                  placeholder={placeholder}
                  maxLength={MAX_INPUT_FIELD_LENGTH}
                  // onChange={(e) => e.target.value}
                  onChange={(e) => {
                    handleInputChange(e.target.value);
                  }}
                  // onBlur={(e) => focusOut(e.target.value)}
                  checked={isChecked}
                  boxWidth={boxWidth}
                  readOnly={!isEditable}
                  boxHeight={boxHeight}
                  paddingRight={paddingRight}
                  pattern={pattern}
                  step={step}
                  decimal={decimal}
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                />
              </FormInputContainer>
            </>
          ) : (
            <InputField
              type={type}
              name={name}
              defaultValue={inputVal}
              value={inputVal}
              placeholder={placeholder}
              maxLength={MAX_INPUT_FIELD_LENGTH}
              // onChange={(e) => e.target.value}
              onChange={(e) => {
                handleInputChange(e.target.value);
              }}
              // onBlur={(e) => focusOut(e.target.value)}
              checked={isChecked}
              boxWidth={boxWidth}
              readOnly={!isEditable}
              boxHeight={boxHeight}
              paddingRight={paddingRight}
              pattern={pattern}
              step={step}
              decimal={decimal}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
            />
          )}
        </>
      )}
    </DataFieldContainer>
  );
};

export default React.memo(DataField);

export const InputField = styled.input<DataFieldProps>`
  padding: ${(props) =>
    props.paddingRight ? `0.6rem 0.6rem 0.6rem 0.6rem` : "0.7rem 1rem"};
  border-radius: 1.5rem;
  text-align: left;
  width: ${(props) =>
    props.boxWidth === FULL_WIDTH ? "100%" : props.boxWidth};
  height: ${(props) =>
    props.boxHeight === FULL_WIDTH ? "100%" : props.boxHeight};
  border: 1px solid ${AppColors.Grey};
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `${AppColors.White}`};

  align-self: flex-start;
  &:focus {
    outline: none;
    border: ${(props) =>
      props.borderColor ? props.borderColor : `1px solid ${AppColors.Blue}`};
  }

  outline: none;
  border: ${(props) =>
    props.borderColor
      ? props.borderColor
      : `1px solid ${AppColors.DarkShadeGrey}`};
  box-shadow: ${(props) =>
    props.borderColor
      ? props.borderColor
      : `0px 0px 20px ${AppColors.InputBoxShadowColor}`};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const DataFieldContainer = styled.div<dataFieldStyleProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0rem")};
`;

const TextAreaField = styled.textarea<DataFieldProps>`
  padding: ${(props) =>
    props.paddingRight ? `0.6rem 0.6rem 0.6rem 0.6rem` : "0.6rem"};
  border-radius: 0.3rem;
  width: ${(props) =>
    props.boxWidth === FULL_WIDTH ? "100%" : props.boxWidth};
  height: ${(props) =>
    props.boxHeight === FULL_WIDTH ? "100%" : props.boxHeight};
  border: 1px solid ${AppColors.Black};
  font-size: 0.8rem;
  background-color: ${AppColors.White};
  align-self: flex-start;
  &:focus {
    outline: none;
    border: 1px solid ${AppColors.Blue};
  }
`;

const FormInputContainer = styled.main<DataFieldProps>`
  position: relative;
  width: 100%;
`;

const InputLabel = styled.label<DataFieldProps>`
  position: absolute;
  left: 16rem;
  top: 0.4rem;
  font-size: 1rem;
`;
