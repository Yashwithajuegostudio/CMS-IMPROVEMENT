import React, { useState } from "react";
import styled from "styled-components";
import {
  defaultObjectProps,
  radioButtonContainerProps,
  RadioButtonLabelProps,
  radioButtonProperty,
} from "../../lib/types";

interface RadioButtonProps {
  optionList?: radioButtonProperty[];
  style?: object;
  gap?: string;
  justifyContent?: string;
  flexDirection?: string;
}

const RadioButtons: React.FC<RadioButtonProps> = ({
  optionList = [],
  style = {},
  gap = "",
  justifyContent = "",
  flexDirection = "row",
}) => {
  const [selectedOption, setSelectedOptions] = useState<defaultObjectProps>({});
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSelectedOptions({
      [name]: value,
    });
  };

  return (
    <RadioButtonContainer
      style={style}
      gap={gap}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
    >
      {optionList.map((list) => {
        return (
          <div style={list.style}>
            <input
              type="radio"
              value={list.value}
              name={list.name}
              key={list.value}
              checked={
                list.isChecked && !Object.keys(selectedOption).length
                  ? true
                  : list.value === selectedOption[list.name]
              }
              onChange={onHandleChange}
            />
            <RadioButtonLabel color={list.color} fontSize={list.fontSize}>
              {list.label}
            </RadioButtonLabel>
          </div>
        );
      })}
    </RadioButtonContainer>
  );
};

export default React.memo(RadioButtons);

const RadioButtonContainer = styled.div<radioButtonContainerProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-around"};
  gap: ${(props) => (props.gap ? props.gap : "2.5rem")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
`;

const RadioButtonLabel = styled.label<RadioButtonLabelProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
`;
