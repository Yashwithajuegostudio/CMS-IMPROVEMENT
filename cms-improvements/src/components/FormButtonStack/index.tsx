import React from "react";
import styled from "styled-components";
import { PRIMARY_BUTTON_VARIANT } from "../../lib/constant";
import { buttonContainerProps, buttonFieldProps } from "../../lib/types";
import Button from "../Button";

interface FormButtonStackProps {
  buttonStackList?: buttonFieldProps;
}

const FormButtonStack: React.FC<FormButtonStackProps> = ({
  buttonStackList = {
    property: [],
    style: {},
    justifyContent: "",
    marginTop: "",
    gap: "",
  },
}) => {
  return (
    <FooterStackContainer
      style={buttonStackList.style}
      justifyContent={buttonStackList.justifyContent}
      marginTop={buttonStackList.marginTop}
      gap={buttonStackList.gap}
    >
      {buttonStackList.property.map((button, index) => (
        <Button
          key={index}
          type={button.type}
          variant={button.variant ? button.variant : PRIMARY_BUTTON_VARIANT}
          // variant={button.variant ? button.variant : PRIMARY_BUTTON_VARIANT}
          value={button.value}
          onClick={button.handleButtonClick}
          style={button.style}
          width={button.width}
          borderType={button.borderType}
          disabled={button.disabled}
          padding={button.padding}
        />
      ))}
    </FooterStackContainer>
  );
};

export default React.memo(FormButtonStack);

const FooterStackContainer = styled.div<buttonContainerProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "2rem")};
  gap: ${(props) => (props.gap ? props.gap : "0rem")};
`;
