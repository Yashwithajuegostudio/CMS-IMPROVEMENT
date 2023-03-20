import React from "react";
import { InputComp } from "../../../styles/globalStyles";
import { MAX_INPUT_FIELD_LENGTH } from "../../lib/constant";

interface InputProps {
  type?: string;
  onChange?: Function;
  onFocusOut?: Function;
  placeholder?: string | undefined | any;
  value?: string | number | undefined;
  checked?: boolean | undefined;
  align?: "left" | "right" | "center";
  autoFocus?: string | "autoFocus";
  disabled?: boolean | undefined;
  cursor?: "pointer";
  style?: object;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  onChange = () => {},
  onFocusOut = () => {},
  placeholder,
  value,
  checked,
  align = "left",
  disabled,
  cursor,
  style,
  maxLength = MAX_INPUT_FIELD_LENGTH,
}) => {
  return (
    <>
      <InputComp
        type={type}
        onChange={(e) => onChange(e?.target?.value)}
        onBlur={(e) => onFocusOut(e?.target?.value)}
        placeholder={placeholder}
        value={value}
        checked={checked}
        align={align}
        disabled={disabled}
        cursor={cursor}
        style={style}
        maxLength={maxLength}
      />
    </>
  );
};

export default React.memo(Input);
