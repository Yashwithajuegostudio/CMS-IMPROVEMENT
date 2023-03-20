import styled from "styled-components";

import { AppColors, ButtonName } from "./constant";
import Button from "../components/Button";

export const UserListTableHeader = () => {
  return [
    { Header: "Stemuli User ID", accessor: "stemuli_user_id" },
    { Header: "User Name", accessor: "user_name" },
    { Header: "Tenant", accessor: "tenant_id" },
    { Header: "User type", accessor: "user_type_name" },
    { Header: "Room name", accessor: "room_name" },

    { Header: "Created Date", accessor: "created_at" },
  ];
};

export const RoomUserListTableHeader = () => {
  return [
    { Header: "User Name", accessor: "user_name" },
    { Header: "Stemuli User ID", accessor: "stemuli_user_id" },
    { Header: "User type", accessor: "user_type_name" },
  ];
};
export const RoomListTableHeader = (
  onDeleteClick: Function,
  onButtonClick: Function
) => {
  return [
    {
      Header: "Room Name",
      accessor: "room_name",
    },
    {
      Header: "Room ID",
      accessor: "room_id",
    },
    {
      Header: "Tenant ID",
      accessor: "tenant_id",
    },
    {
      Header: "Room Type",
      accessor: "room_type_name",
    },
    {
      Header: "User Count",
      accessor: "user_count",
    },
    {
      Header: "User List",
      accessor: "user",
      Cell: ({
        row,
      }: {
        row: {
          getToggleRowSelectedProps: any;
          original: {
            activePage: number;
            room_id: number;
            status: string;
          };
        };
      }) => {
        return (
          <Button
            value={ButtonName.Users}
            width={"6rem"}
            padding={"0.5rem"}
            onClick={() =>
              onButtonClick(
                row.original.room_id,
                row.original.activePage,
                row.original.status,
                ButtonName.Users
              )
            }
          />
        );
      },
    },
    {
      Header: "Edit",
      accessor: "edit",
      Cell: ({
        row,
      }: {
        row: {
          getToggleRowSelectedProps: any;
          original: {
            activePage: any;
            room_id: number;
            status: string;
          };
        };
      }) => {
        return (
          <Button
            value={ButtonName.Edit}
            width={"4.5rem"}
            variant={undefined}
            padding={"0.4rem"}
            borderType={"halfCurved"}
            backgroundColor={AppColors.EditBtnColor}
            onClick={() =>
              onButtonClick(
                row.original.room_id,
                row.original.activePage,
                row.original.status,
                ButtonName.Edit
              )
            }
          />
        );
      },
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: ({
        row,
      }: {
        row: {
          getToggleRowSelectedProps: any;
          original: {
            activePage: any;
            room_id: number;
            status: string;
          };
        };
      }) => {
        return (
          <Button
            value={ButtonName.Delete}
            width={"4.5rem"}
            disabled={
              row.original.status === ButtonName.Completed
                ? true
                : row.original.status === ButtonName.Deleted
                ? true
                : false
            }
            variant={undefined}
            padding={"0.4rem"}
            borderType={"halfCurved"}
            backgroundColor={AppColors.DeleteBtnColor}
            onClick={() => onDeleteClick(row.original.room_id)}
          />
        );
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({
        row,
      }: {
        row: {
          getToggleRowSelectedProps: any;
          original: {
            activePage: any;
            room_id: number;
            status: string;
          };
        };
      }) => {
        return (
          <Button
            value={row.original.status}
            width={"5rem"}
            variant={
              row.original.status === ButtonName.Active
                ? "secondary"
                : undefined
            }
            padding={"0.6rem"}
            border=""
            borderType={"halfCurved"}
            backgroundColor={
              row.original.status === ButtonName.InProgress
                ? AppColors.StatusBtnColor
                : row.original.status === ButtonName.Deleted
                ? AppColors.DeleteBtnColor
                : row.original.status === ButtonName.Completed
                ? AppColors.LightShadeGreen
                : row.original.status === ButtonName.Pending
                ? AppColors.SkyBlue
                : AppColors.White
            }
          />
        );
      },
    },
  ];
};

export const Label = styled.label`
  align-self: center;
`;

export const StatusCell = styled.p`
  color: ${(prop) => prop.color};
`;
