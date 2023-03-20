import React from "react";
import styled from "styled-components";
import { AppColors } from "../../lib/constant";
import { ConfirmationPopUpProps } from "../../lib/types";
import Button from "../Button";

const ConfirmationPopUp: React.FC<ConfirmationPopUpProps> = ({
  onCancelClick = () => {},
  onConfirmClick = () => {},
  message = <></>,
  disabled,
}) => {
  return (
    <ConfirmationPopUpContainer>
      <PopuUpMessageContainer>{message}</PopuUpMessageContainer>
      <ButtonContainer>
        <Button
          value={"Yes"}
          disabled={disabled}
          style={{
            height: "3rem",
            backgroundColor: `${disabled} ? ${AppColors.LightShadeOrange}: ${AppColors.DarkShadeGrey}`,
            color: AppColors.AppWhite,
          }}
          onClick={() => onConfirmClick()}
        />
        <Button
          value={"No"}
          style={{
            height: "3rem",
            backgroundColor: AppColors.DarkShadeGrey,
            color: AppColors.AppWhite,
          }}
          onClick={() => onCancelClick()}
        />
      </ButtonContainer>
    </ConfirmationPopUpContainer>
  );
};

export default React.memo(ConfirmationPopUp);

const ConfirmationPopUpContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PopuUpMessageContainer = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  font-family: bold;
  align-self: center;
  text-align: center;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1.3rem;
`;
