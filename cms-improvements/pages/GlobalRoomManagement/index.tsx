import { getGlobalRoomDetails, postGlobalRoom } from "@/api/roomServices";
import AlertPopUp from "@/components/AlertPopUp";
import ConfirmationPopUp from "@/components/ConfirmationPopUp";
import Form from "@/components/Form";
import FormButtonStack from "@/components/FormButtonStack";
import FormDataFieldStack from "@/components/FormDataFieldStack";
import PopUp from "@/components/PopUp";
import Toast from "@/components/Toast";

import { AuthContext } from "@/context/AuthProvider";
import {
  ButtonName,
  EDIT_ROOM,
  GLOBAL_ROOM_MANAGEMENT,
  INVALID_ACCESS_TOKEN,
  MANDATORY_FIELD,
  POP_UP_TYPE,
  ROOM_EDIT_IN_SUCCESS,
  SESSION_EXPIRED,
} from "@/lib/constant";
import { globalRoomStackList } from "@/lib/formStackHelper";

import {
  ConfirmationPopUpProps,
  GlobalRoomData,
  GlobalRoomProps,
  ModelDataProps,
  ToastFieldProps,
  buttonFieldProps,
} from "@/lib/types";

import React, { useContext, useEffect, useState } from "react";

import {
  AlertMessage,
  ContentContainer,
  PageListHeaderContainer,
  PopUpMessageContainer,
  TableTitle,
} from "styles/globalStyles";

interface globalRoomProps {
  data?: any;
  onClose?: Function;
  room_id?: number | string;
  activePageNumber?: number | string;
  status?: number | string;
}
export interface formDataProps {
  room_id?: number;
}
const GlobalRoomManagement: React.FC<globalRoomProps> = () => {
  const [toast, setToast] = useState<ToastFieldProps>({
    show: false,
    message: " ",
    type: "error",
    position: "top-right",
  });
  const [globalRoomFormData, setGlobalRoomFormData] = useState<any>({});
  const { globalRoomRowOne, globalRoomRowTwo, globalRoomRowThree } =
    globalRoomStackList(globalRoomFormData ? globalRoomFormData : "");
  const [alertPopUp, setAlertPopUp] = useState<ConfirmationPopUpProps>({
    show: false,
    message: <></>,
    type: 0,
  });

  const [isRef, setIsRef] = useState(false);
  const [editFormData, setEditFormData] = useState<GlobalRoomProps>();
  const [confirmClickStatus, setConfirmClickStatus] = useState(false);
  const formHeaderProps = {
    header: <></>,
    display: "",
  };
  const [modelData, setModelData] = useState<ModelDataProps>({
    show: false,
    message: <></>,
    type: false,
    isSuccess: false,
  });

  const { resetToken } = useContext(AuthContext);

  useEffect(() => {
    getEditFormData();
  }, []);
  const buttonList: buttonFieldProps = {
    gap: "2rem",
    marginTop: "2.5rem",
    property: [
      {
        type: "submit",
        value: ButtonName.Save,

        width: "custom",
        padding: "0.6rem 3.3rem",
      },
    ],
  };
  const getEditFormData = () => {
    getGlobalRoomDetails()
      .then((data) => {
        setGlobalRoomFormData(data);
      })
      .catch((err) => {
        setModelData({
          show: true,
          message: <AlertMessage>{SESSION_EXPIRED}</AlertMessage>,
          type: true,
        });
      });
  };

  const confirmPopUp = () => {
    setAlertPopUp({
      show: true,
      message: <PopUpMessageContainer>{EDIT_ROOM}</PopUpMessageContainer>,
      type: 0,
    });
  };
  const formValidation = (globalRoomData: GlobalRoomProps) => {
    if (
      !globalRoomData.max_user_count ||
      !globalRoomData.ping_expiry ||
      !globalRoomData.room_expiry
    ) {
      setToast({
        ...toast,
        show: true,
        type: "info",
        position: "top-right",
        message: MANDATORY_FIELD,
      });
    } else {
      return true;
    }
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & GlobalRoomData;
    const formData: GlobalRoomProps = {
      max_user_count: target.max_user_count.value,
      room_expiry: target.room_expiry.value,
      ping_expiry: target.ping_expiry.value,
    };

    setEditFormData(formData);
    if (formValidation(formData)) confirmPopUp();
  };
  const onClickReset = () => {
    setIsRef(!isRef);
  };

  const onClickConfirm = (formData: GlobalRoomProps) => {
    if (true) {
      setConfirmClickStatus(true);
      postGlobalRoom(formData)
        .then((responseData) => {
          if (responseData) {
            setModelData({
              show: true,
              message: <AlertMessage>{ROOM_EDIT_IN_SUCCESS}</AlertMessage>,
              type: false,
              isSuccess: true,
            });
          }
          onCloseAlert();
        })
        .catch((err) => {
          if (Number(err) === INVALID_ACCESS_TOKEN) {
            setModelData({
              show: true,
              message: <AlertMessage>{SESSION_EXPIRED}</AlertMessage>,
              type: true,
              isSuccess: false,
            });
          } else {
            setToast({
              ...toast,
              show: true,
              type: "error",
              message: err,
            });
            setConfirmClickStatus(false);
            alertPopUp.show = false;
          }
        });
    }
  };
  const onCloseAlert = () => {
    setAlertPopUp({
      message: <></>,
      type: 0,
      show: false,
    });
  };

  const onOkClickHandler = () => {
    setModelData({
      show: false,
      message: <></>,
      type: false,
      isSuccess: false,
    });
    if (modelData.isSuccess) {
      setConfirmClickStatus(false);
      getEditFormData();
      if (globalRoomFormData) {
      } else {
        onClickReset();
      }
    } else {
      resetToken();
    }
  };

  return (
    <>
      <PageListHeaderContainer>
        <TableTitle>{GLOBAL_ROOM_MANAGEMENT}</TableTitle>
      </PageListHeaderContainer>
      <ContentContainer width="100%" height="78%">
        {modelData.show ? (
          <PopUp popUptype={"popup"}>
            <AlertPopUp
              message={modelData.message}
              onOkClick={() => {
                onOkClickHandler();
              }}
            />
          </PopUp>
        ) : (
          <>
            <Form
              alignItem="center"
              formHeader={formHeaderProps}
              formBodyStack={[
                <>
                  <FormDataFieldStack
                    dataFieldStackList={globalRoomRowOne}
                    isRef={isRef}
                  />
                  <FormDataFieldStack
                    dataFieldStackList={globalRoomRowTwo}
                    isRef={isRef}
                  />
                  <FormDataFieldStack
                    dataFieldStackList={globalRoomRowThree}
                    isRef={isRef}
                  />
                </>,
              ]}
              formFooterStack={[
                <FormButtonStack buttonStackList={buttonList} />,
              ]}
              onFormSubmit={onFormSubmit}
            />
            {toast.show && (
              <Toast
                type={toast.type}
                position={toast.position}
                onClose={() => setToast({ ...toast, message: "", show: false })}
                description={toast.message}
              />
            )}
            {alertPopUp.show && !confirmClickStatus && (
              <PopUp popUptype={POP_UP_TYPE} width="40%">
                <ConfirmationPopUp
                  message={alertPopUp.message}
                  onConfirmClick={() => {
                    onClickConfirm(Object(editFormData));
                  }}
                  onCancelClick={() => {
                    setConfirmClickStatus(false);
                    setAlertPopUp({
                      ...alertPopUp,
                      show: false,
                      message: <></>,
                      type: 0,
                    });
                  }}
                />
              </PopUp>
            )}
          </>
        )}
      </ContentContainer>
    </>
  );
};

export default React.memo(GlobalRoomManagement);
