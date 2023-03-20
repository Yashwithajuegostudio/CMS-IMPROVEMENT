import React from "react";
import styled from "styled-components";
import {
  AppColors,
  Border_half_curved,
  CUSTOM_WIDTH,
  FULL_WIDTH,
  PRIMARY_BUTTON_VARIANT,
  SUBMIT_BUTTON,
} from "../../lib/constant";
import Img from "../Img";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "primary" | "secondary" | "none" | "red";
  width?: "full" | "custom" | string;
  borderType?: "halfCurved";
  disabled?: boolean;
  style?: object;
  backgroundColor?: string;
  color?: string;
  border?: string;
  padding?: string;
  srcPath?: string;
  altName?: string;
  boxShadow?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  value = SUBMIT_BUTTON,
  onClick,
  onChange,
  variant = PRIMARY_BUTTON_VARIANT,
  width = FULL_WIDTH,
  borderType,
  disabled,
  style,
  backgroundColor,
  padding = "",
  srcPath = "",
  altName = "",
  boxShadow = "",
}) => {
  return (
    <>
      <ButtonComp
        type={type}
        onChange={onChange}
        onClick={onClick}
        variant={variant}
        width={width}
        borderType={borderType}
        disabled={disabled}
        style={style}
        backgroundColor={backgroundColor}
        padding={padding}
        boxShadow={boxShadow}
      >
        <Img src={srcPath} alt={altName} />
        {value}
      </ButtonComp>
    </>
  );
};

export default React.memo(Button);

const ButtonComp = styled.button<ButtonProps>`
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : `0.7rem 3rem`)};
  border-radius: ${(props) =>
    props.borderType === Border_half_curved ? "none" : `1.5rem`};
  font-size: 1rem;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : `auto`)};
  border: ${(props) =>
    props.variant === PRIMARY_BUTTON_VARIANT
      ? "none"
      : props.variant === "red"
      ? `2px solid ${AppColors.DarkShadeGrey}`
      : `2px solid ${AppColors.LightShadeGreen}`};
  background: ${(props) =>
    props.disabled
      ? `${AppColors.Grey}`
      : props.variant === PRIMARY_BUTTON_VARIANT
      ? props.backgroundColor
        ? `${props.backgroundColor}`
        : `${AppColors.LightShadeRed}`
      : `${AppColors.AppWhite}`};

  color: ${(props) =>
    props.variant === "secondary"
      ? `${AppColors.LightShadeGreen}`
      : props.variant === "primary"
      ? `${AppColors.White}`
      : props.variant === "none"
      ? `${AppColors.Black}`
      : props.variant === "red"
      ? `${AppColors.TableTitleColor}`
      : `${AppColors.Black}`};
  &:hover,
  &:focus {
    box-shadow: ;
    box-shadow: ${(props) =>
      props.boxShadow ? props.boxShadow : `0px 2px 4px ${AppColors.Primary}`};
  }
`;

interface LinkButtonProps {
  textColor?: "primary" | "secondary";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
}

export const LinkButton = styled.a<LinkButtonProps>`
  font-size: 14px;
  display: flex;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : `flex-start`)};
  align-self: ${(props) =>
    props.textColor === "primary"
      ? `${AppColors.TextColor}`
      : `${AppColors.Primary}`};
  color: ${(props) =>
    props.textColor === "primary"
      ? `${AppColors.TextColor}`
      : `${AppColors.Primary}`};
  font-weight: normal;
  font-weight: ${(props) => (props.textColor === "primary" ? "normal" : `500`)};
`;
