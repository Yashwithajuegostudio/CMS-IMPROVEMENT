import { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../../styles/globalStyles";
import { AppColors, FULL_WIDTH, ROW_DIRECTION } from "../../lib/constant";
import { dataFieldStyleProps } from "../../lib/types";

interface TimeDividerProps {
  label?: string;
  type?: string;
  name?: string;
  onChange?: Function;
  defaultValue?: string;
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
  isRef?: boolean;
  value?: string;
}
const TimeDivider: React.FC<TimeDividerProps> = ({
  label = "",
  name = "name",
  defaultValue = "00:00:00",
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
  flexDirection = "",
  labelWidth = "",
  onChange = () => {},
  value = "00:00",
  isRef = "",
}) => {
  const defaultTimeData = { hour: "hh", min: "mm", sec: "ss" };
  const [timeData, setTimeData] = useState<{
    hour: number | string;
    min: number | string;
    sec: number | string;
  }>({
    hour: defaultValue.split(":")[0] ? defaultValue.split(":")[0] : "00",
    min: defaultValue.split(":")[1] ? defaultValue.split(":")[1] : "00",
    sec: defaultValue.split(":")[2] ? defaultValue.split(":")[2] : "00",
  });

  const onTimeChange = (timeValue = 0, type = 0, max = 0) => {
    //type 1 mean s hours change type 2 means minute change
    if (type === 1) {
      setTimeData({
        ...timeData,
        hour:
          timeValue > max && max != 0
            ? timeData.hour.toString().length > 2
              ? Number(timeData.hour.toString().slice(0))
              : timeData.hour
            : timeValue.toString().length > 2
            ? Number(timeValue.toString().slice(0))
            : timeValue.toString().length === 1
            ? "0".concat(timeValue.toString())
            : timeValue,
      });
    }
    if (type === 2) {
      setTimeData({
        ...timeData,
        min:
          timeValue > max && max != 0
            ? timeData.min.toString().length > 2
              ? Number(timeData.min.toString().slice(0))
              : timeData.min
            : timeValue.toString().length > 2
            ? Number(timeValue.toString().slice(0))
            : timeValue.toString().length === 1
            ? "0".concat(timeValue.toString())
            : timeValue,
      });
    }

    if (type === 3) {
      setTimeData({
        ...timeData,
        sec:
          timeValue > max && max != 0
            ? timeData.sec.toString().length > 2
              ? Number(timeData.sec.toString().slice(0))
              : timeData.sec
            : timeValue.toString().length > 2
            ? Number(timeValue.toString().slice(0))
            : timeValue.toString().length === 1
            ? "0".concat(timeValue.toString())
            : timeValue,
      });
    }
  };

  useEffect(() => {
    onChange(
      (Number(timeData.hour) ? timeData.hour : "00") +
        ":" +
        (Number(timeData.min) ? timeData.min : "00") +
        ":" +
        (Number(timeData.sec) ? timeData.sec : "00")
    );
  }, [timeData]);

  useEffect(() => {
    if (isRef) setTimeData({ hour: "00", min: "00", sec: "00" });
  }, [isRef]);

  return (
    <TimeDividerMainContainer
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
        </Label>
      )}

      <TimeDividerContainer>
        <TimerContainer
          type="text"
          onChange={(e) =>
            onTimeChange(Number(e.target.value.replace(/\D/g, "")), 1, 99)
          }
          placeholder={defaultTimeData.hour}
          defaultValue={timeData.hour}
          value={timeData.hour}
          dataType={1}
        />
        :
        <TimerContainer
          type="text"
          onChange={(e) =>
            onTimeChange(Number(e.target.value.replace(/\D/g, "")), 2, 59)
          }
          placeholder={defaultTimeData.min}
          value={timeData.min}
          defaultValue={timeData.min}
          dataType={2}
        />
        :
        <TimerContainer
          type="text"
          onChange={(e) =>
            onTimeChange(Number(e.target.value.replace(/\D/g, "")), 3, 59)
          }
          placeholder={defaultTimeData.sec}
          value={timeData.sec}
          defaultValue={timeData.sec}
          dataType={3}
        />
        <HourMinuteContent
          value={
            (Number(timeData.hour) ? timeData.hour : "00") +
            ":" +
            (Number(timeData.min) ? timeData.min : "00") +
            ":" +
            (Number(timeData.sec) ? timeData.sec : "00")
          }
          type="hidden"
          name={name}
        />
      </TimeDividerContainer>
    </TimeDividerMainContainer>
  );
};

export default TimeDivider;

const TimeDividerMainContainer = styled.div<dataFieldStyleProps>`
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

export const TimeDividerContainer = styled.span<any>`
  padding: ${(props) =>
    props.paddingRight ? `0rem 0.6rem 0.6rem 0.6rem` : "0.6rem 0.6rem"};
  border-radius: 0.3rem;
  text-align: left;
  width: 100%;
  height: ${(props) =>
    props.boxHeight === FULL_WIDTH ? "100%" : props.boxHeight};
  border: 1px solid ${AppColors.Grey};
  font-size: 0.8rem;
  background-color: ${AppColors.White};
  align-self: flex-start;
  &:focus {
    outline: none;
    border: 1px solid ${AppColors.Blue};
  }

  outline: none;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const TimerContainer = styled.input<{ dataType: number }>`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  :focus {
    outline: none;
  }
  width: 1.2rem;
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const HourMinuteContent = styled.input`
  display: hidden;
`;
