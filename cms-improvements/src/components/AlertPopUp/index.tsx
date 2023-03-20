import React from "react";
import styled from "styled-components";
import { AppColors } from "../../lib/constant";
import Button from "../Button";

interface AlertPopUpProps {
  message?: JSX.Element;
  onOkClick?: Function;
}

const AlertPopUp: React.FC<AlertPopUpProps> = ({
  message = <></>,
  onOkClick = () => {},
}) => {
  return (
    <AlertPopUpContainer>
      <AlertPopUpContent>{message}</AlertPopUpContent>
      <Button
        value={"OK"}
        onClick={() => onOkClick()}
        style={{
          backgroundColor: AppColors.ParotGreen,
          width: "auto",
          alignSelf: "center",
        }}
      />
    </AlertPopUpContainer>
  );
};

export default React.memo(AlertPopUp);

const AlertPopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AlertPopUpContent = styled.div`
  margin: auto;
`;
