import React from "react";
import styled from "styled-components";
import { dataFieldContainerProps, dataFieldProps } from "../../lib/types";
import TimeDivider from "../TimeDivider";

interface FormTimerStackProps {
  timerStackList?: dataFieldProps | any;
  isRef?: boolean;
}

const FormTimerStack: React.FC<FormTimerStackProps> = ({
  timerStackList = { property: [] },
  isRef,
}) => {
  return (
    <TimerStackContainer
      style={timerStackList.style}
      gap={timerStackList.gap}
      marginTop={timerStackList.marginTop}
      flexDirection={timerStackList.flexDirection}
      margin={timerStackList.margin}
      marginBottom={timerStackList.marginBottom}
      marginLeft={timerStackList.marginLeft}
      marginRight={timerStackList.marginRight}
      justifyContent={timerStackList.justifyContent}
      flexWrap={timerStackList.flexWrap}
    >
      {timerStackList.property.map(
        (
          formField: {
            isEditable?: boolean;
            label: string | undefined;
            name: React.Key | null | undefined | any;
            defaultValue: string | undefined;
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
            onChange?: () => {};
            value?: string;
          },
          index: any
        ) => (
          <TimeDivider
            isEditable={formField.isEditable}
            label={formField.label}
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
            onChange={formField.onChange}
            isRef={isRef}
            value={formField.value}
          />
        )
      )}
    </TimerStackContainer>
  );
};

export default React.memo(FormTimerStack);

const TimerStackContainer = styled.div<dataFieldContainerProps>`
  width: 100%;
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

  gap: ${(props) => (props.gap ? props.gap : "0.5rem")};
`;
