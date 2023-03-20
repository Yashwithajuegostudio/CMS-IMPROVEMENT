import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import { AppColors } from "../../lib/constant";

import { TOAST_PROPERTIES } from "./toastProperties";
export interface ToastProps {
  type?: "success" | "warning" | "info" | "error";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  description: string;
  onClose: Function;
}

const Toast: React.FC<ToastProps> = ({
  type,
  position = "top-right",
  description,
  onClose,
}) => {
  const [toast_state, setToast_State] = useState<boolean>(false);
  const [list, setList] =useState(TOAST_PROPERTIES.filter((obj: { type: string }) => obj.type == type));

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      onClose()
    },7000);
  }, []);

  return (
    <>
      <Box className={position}>
        <NotificationContainer className={position}>
          {list.map((toast, i) => (
            <NotificationBox
              key={i}
              className={position}
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <NotificationButton onClick={() => onClose()}>
                <FiX></FiX>
              </NotificationButton>
              <NotificationImage className="notification-image">
                {toast.icon}
              </NotificationImage>
              <div>
                <NotificationTitle>{type}</NotificationTitle>
                <NotificationMessage>{description}</NotificationMessage>
              </div>
            </NotificationBox>
          ))}
        </NotificationContainer>
      </Box>
    </>
  );
};

export default Toast;

const NotificationContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  .button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: ${AppColors.White};
    outline: none;
    border: none;
    text-shadow: 0 1px 0 ${AppColors.White};
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }

  & .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 3s;
  }

  & .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 2s;
  }

  & .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 2s infin;
  }

  & .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }
`;

const NotificationBox = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  margin-left: 5px;
  width: 300px;
  max-height: 100px;
  border-radius: 20px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0 0 12px ${AppColors.White};
    opacity: 1;
    cursor: pointer;
  }
  .toast {
    height: 80px;
    width: 365px;
    color: ${AppColors.White};
    padding: 20px 15px 10px 10px;
  }
`;

const NotificationButton = styled.div`
  position: relative;
  right: -0.3em;
  top: -0.3em;
  float: right;
  font-weight: 700;
  outline: none;
  border: none;
  text-shadow: 0 1px 0 ${AppColors.White};
  opacity: 0.8;
  line-height: 1;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  color: ${AppColors.Black};
`;

const NotificationImage = styled.div`
  width: 5px;
  height: 8px;
`;

const NotificationMessage = styled.p`
  margin: 0;
  text-align: left;
  margin-left: 22px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const NotificationTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: -25px;
  margin-left: 20px;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;
const fadeLeft = keyframes`
  from {
    left: -1px;
    opacity: 0;
  }

  to {
    left: 13px;
    opacity: 1;
  }
`;
const fadeRight = keyframes`
  from {
    right: -12px;
    opacity: 1;
  }

  to {
    right: 13px;
    opacity: 1;
  }
  
  
`;

const Box = styled(NotificationContainer)`
  .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeRight} 1s linear;
    transition-delay: 40s;
  }
  .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeLeft} 6s linear;
    transition-delay: 40s;
  }
  .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeLeft} 1s linear;
    transition-delay: 40s;
  }
  .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeRight} 1s linear;
    transition-delay: 40s;
  }
`;
