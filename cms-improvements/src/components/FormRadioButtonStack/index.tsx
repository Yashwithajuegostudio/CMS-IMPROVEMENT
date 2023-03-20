import React from "react";
import { radioButtonProps } from "../../lib/types";
import RadioButtons from "../RadioButton";

interface FormRadioButtonStackProps {
  radioButtonStackList?: radioButtonProps;
}

const FormRadioButtonStack: React.FC<FormRadioButtonStackProps> = ({
  radioButtonStackList = {
    property: [],
    style: {},
    justifyContent: "",
    gap: "",
    flexDirection: "",
  },
}) => {
  return (
    <RadioButtons
      optionList={radioButtonStackList.property}
      style={radioButtonStackList.style}
      justifyContent={radioButtonStackList.justifyContent}
      gap={radioButtonStackList.gap}
      flexDirection={radioButtonStackList.flexDirection}
    />
  );
};

export default React.memo(FormRadioButtonStack);
