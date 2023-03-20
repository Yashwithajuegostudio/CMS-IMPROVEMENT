import moment from "moment";
import { useState } from "react";
import {
  AppColors,
  DEFAULT_DATE_FORMAT,
  DEFAULT_TIME_FORMAT,
  MAX_INPUT_FIELD,
  RoomOptions,
  StatusCode,
} from "./constant";

import { dropDownFieldProps } from "./types";

export const loginStackList = () => {
  const dataFieldList = {
    flexDirection: "column",
    property: [
      {
        label: "",
        type: "text",
        name: "email",
        placeholder: "USERNAME",
      },
      {
        label: "",
        type: "password",
        name: "password",
        placeholder: "PASSWORD",
      },
    ],
  };
  return { dataFieldList };
};
export const createRoomStackList = (data: any) => {
  const [, setRoomType] = useState(data?.room_type ? data?.room_type : 1);

  const createRoomRowThree: dropDownFieldProps = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",
    width: "0%",
    property: [
      {
        label: "Room Type",
        type: "text",
        name: "room_type",
        flexDirection: "column",
        alignItems: "flex-start",
        labelWidth: "10rem",
        defaultValue: data ? data.room_type : "",
        dataList: RoomOptions,
        onChangeHandler: (value: any) => {
          setRoomType(value);
        },
        width: "auto",
        style: {
          alignItems: "center",
          flexDirection: "row",
        },
      },
    ],
  };

  const createRoomRowOne = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Room Name",
        type: "text",
        name: "room_name",
        placeholder: "Enter Name",
        labelWidth: "20rem",
        defaultValue: data?.room_name,
        value: data?.room_name,

        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  const createRoomRowTwo = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Tenant ID",
        type: "text",
        name: "tenant_id",
        labelWidth: "20rem",
        defaultValue: data ? data.tenant_id : "",
        value: data?.tenant_id,
        step: "0.01",
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  return {
    createRoomRowTwo,
    createRoomRowThree,
    createRoomRowOne,
  };
};

export const editFormStackList = (data: any) => {
  let checkFormStackStatus =
    data.status === StatusCode.Deleted || data.status === StatusCode.Completed;
  const editFormRowOne = {
    marginTop: "1.5rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Room Name",
        type: "text",
        borderColor: checkFormStackStatus ? "none" : "",
        backgroundColor: checkFormStackStatus
          ? AppColors.DisabledInputField
          : "",
        isEditable: checkFormStackStatus ? false : true,
        name: "room_name",
        placeholder: "Enter Name",
        labelWidth: "20rem",
        defaultValue: data?.room_name,
        value: data?.room_name,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
      {
        label: "Room ID",
        type: "text",
        name: "room_id",
        labelWidth: "20rem",
        defaultValue: data?.room_id,
        isEditable: false,
        backgroundColor: AppColors.DisabledInputField,
        borderColor: "none",
        value: data?.room_id,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  const editFormRowTwo = {
    marginTop: "1.5rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Tenant ID",
        type: "text",
        name: "tenant_id",
        labelWidth: "20rem",
        borderColor: "none",
        isEditable: false,
        maxValue: MAX_INPUT_FIELD,
        backgroundColor: AppColors.DisabledInputField,
        defaultValue: data?.tenant_id,
        value: data?.tenant_id,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
      {
        label: "Room Type",
        type: "text",
        name: "room_type",
        labelWidth: "20rem",
        borderColor: "none",
        isEditable: false,
        backgroundColor: AppColors.DisabledInputField,
        defaultValue: data?.room_type,
        value: data?.room_type,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };
  const editFormRowThree = {
    marginTop: "1.5rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "User Count",
        type: "text",
        name: "user_count",
        labelWidth: "20rem",
        borderColor: "none",
        isEditable: false,
        backgroundColor: AppColors.DisabledInputField,
        defaultValue: data?.user_count,
        value: data?.user_count,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
      {
        label: "Max User Count",
        type: "number",
        name: "max_user_count",
        labelWidth: "20rem",
        borderColor: checkFormStackStatus ? "none" : "",
        backgroundColor: checkFormStackStatus
          ? AppColors.DisabledInputField
          : "",
        isEditable: checkFormStackStatus ? false : true,
        maxValue: MAX_INPUT_FIELD,
        defaultValue: data?.max_user_count,
        value: data?.max_user_count,

        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  const editFormRowFour = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Created at",
        type: "text",
        borderColor: "none",
        name: "created_at",
        labelWidth: "20rem",
        isEditable: false,
        backgroundColor: AppColors.DisabledInputField,
        defaultValue: ` ${moment(new Date(data?.created_at)).format(
          DEFAULT_TIME_FORMAT
        )}\t ${moment(new Date(data?.created_at)).format(DEFAULT_DATE_FORMAT)}`,

        value: data?.created_at,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
      {
        label: "Pinged at",
        type: "text",
        name: "pinged_at",
        labelWidth: "20rem",
        isEditable: false,
        borderColor: "none",

        backgroundColor: AppColors.DisabledInputField,
        defaultValue: data?.pinged_at
          ? ` ${moment(new Date(data?.pinged_at)).format(
              DEFAULT_TIME_FORMAT
            )}\t ${moment(new Date(data?.pinged_at)).format(
              DEFAULT_DATE_FORMAT
            )}`
          : "",
        value: data?.pinged_at,
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };
  return {
    editFormRowTwo,
    editFormRowThree,
    editFormRowOne,
    editFormRowFour,
  };
};

export const globalRoomStackList = (data: any) => {
  const globalRoomRowOne = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Max User per room",
        type: "number",
        name: "max_user_count",
        labelWidth: "20rem",
        defaultValue: data?.max_user_count,
        value: data?.max_user_count,
        maxValue: MAX_INPUT_FIELD,
        step: "1",

        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  const globalRoomRowTwo = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Ping Expiry time",
        type: "number",
        name: "ping_expiry",
        labelWidth: "20rem",
        maxValue: MAX_INPUT_FIELD,
        defaultValue: data ? data.ping_expiry : "",
        value: data?.ping_expiry,
        IsLabel: true,
        step: "1",
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };
  const globalRoomRowThree = {
    marginTop: "1rem",
    gap: "1.5rem",
    justifyContent: "space-between",

    property: [
      {
        label: "Room Expiry time",
        type: "number",
        name: "room_expiry",
        labelWidth: "20rem",
        maxValue: MAX_INPUT_FIELD,
        IsLabel: true,
        defaultValue: data ? data.room_expiry : "",
        value: data?.room_expiry,

        step: "1",
        style: {
          flexDirection: "row",
        },
        width: "auto",
      },
    ],
  };

  return {
    globalRoomRowOne,
    globalRoomRowTwo,
    globalRoomRowThree,
  };
};
