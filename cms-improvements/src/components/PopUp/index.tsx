import React from "react";
import styled from "styled-components";
import { AppColors, FROM_POP_UP_TYPE } from "../../lib/constant";

type ModalProps = {
  popUptype: "form" | "popup";
  onClick?: Function;
  width?: string;
};

const PopUp: React.FC<{
  children: React.ReactNode;
  popUptype?: "form" | "popup";
  width?: string;
  isErrorModal?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({
  children,
  popUptype = "form",
  onClick = () => {},
  width,
  isErrorModal = false,
}) => {
  return (
    <>
      <Modal popUptype={popUptype} onClick={onClick}>
        <ModalBody
          popUptype={popUptype}
          width={width}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalBody>
      </Modal>
    </>
  );
};

export default React.memo(PopUp);

const Modal = styled.div<ModalProps>`
  height: 100%;
  width: 100%;
  display: ${(props) =>
    props?.popUptype === FROM_POP_UP_TYPE ? "block" : "flex"};
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 100;
  left: 0;
  background: ${AppColors.BlackOverlay};
`;

const ModalBody = styled.div<ModalProps>`
  background-color: ${AppColors.White};
  width: ${(props) => (props.width ? props.width : "50%")};
  margin: ${(props) =>
    props?.popUptype === FROM_POP_UP_TYPE ? "6rem" : "auto"};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
