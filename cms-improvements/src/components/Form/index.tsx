import React, { FormEvent } from "react";
import styled from "styled-components";
import { FormContainer } from "../../../styles/globalStyles";
import { AppColors } from "../../lib/constant";
import { formHeaderProps } from "../../lib/types";
interface formProps {
  onFormSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  formHeader?: {
    header: string | JSX.Element;
    color?: string;
    fontSize?: string;
    style?: object;
    subContent?: string;
    subHeader?: string;
    display?: string;
  };
  subBodyComponent?: JSX.Element;
  subFooterComponent?: JSX.Element;
  formBodyStack?: Array<JSX.Element>;
  formFooterStack?: Array<JSX.Element>;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
  boxShadow?: string;
  ref?: string;
  margin?: string;
  alignItem?: string;
}

const Form: React.FC<formProps> = ({
  onFormSubmit,
  formHeader = { header: "", style: {}, color: "", fontSize: "", display: "" },
  subBodyComponent = null,
  subFooterComponent = null,
  formBodyStack = [],
  formFooterStack = [],
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "column",
  background = "",
  padding = "",
  margin = "",
  alignItem = "",
}) => {
  return (
    <FormContainer
      onSubmit={onFormSubmit}
      justifyContent={justifyContent}
      alignItems={alignItems}
      background={background}
      flexDirection={flexDirection}
      padding={padding}
    >
      <FormHeader
        style={formHeader.style}
        color={formHeader.color}
        fontSize={formHeader.fontSize}
        display={formHeader.display}
      >
        {formHeader.header}
      </FormHeader>
      <FormSubHeader>{formHeader.subHeader}</FormSubHeader>
      <FormSubContent>{formHeader?.subContent}</FormSubContent>

      <FormBodyContainer margin={margin} alignItem={alignItem}>
        <>
          {formBodyStack.map((formBodyField, index) => (
            <div key={index}>{formBodyField}</div>
          ))}
        </>
        {subBodyComponent}
        {subFooterComponent}
      </FormBodyContainer>
      <>
        {formFooterStack.map((formFooterField, index) => (
          <div key={index}>{formFooterField}</div>
        ))}
      </>
    </FormContainer>
  );
};

export default React.memo(Form);

const FormHeader = styled.p<formHeaderProps>`
  font-weight: bold;
  text-align: center;
  /* padding: 0.8rem 0 0.5rem 0; */
  color: ${(props) => (props.color ? props.color : AppColors.LightShadeRed)};
  font-weight: 700;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.5rem")};
  margin-bottom: 0.5rem;
  padding: 0;
  width: 100%;
  display: ${(props) => (props.display === "" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

const FormBodyContainer = styled.div<formProps>`
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${(props) => (props.alignItem ? props.alignItem : "unset")};
`;

const FormSubContent = styled.main`
  color: ${AppColors.LightShadeGrey};
  font-size: 1.2rem;
  white-space: nowrap;
`;

const FormSubHeader = styled.main`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
