import moment from "moment";
import { ButtonName, StatusCode } from "./constant";
import { RoomListProp, RoomUserListProp, UserListProp } from "./types";

export const formatUserList = (
  orderList: UserListProp[],
  activePage: number
) => {
  const formatUserListTableData = orderList.map((UserList, index) => {
    const { user_name, user_type_name, room_name, stemuli_user_id, tenant_id } =
      UserList;

    return {
      index: `${
        activePage - 1 === 0
          ? index === 9
            ? activePage
            : ""
          : index === 9
          ? activePage
          : activePage - 1
      }${index == 9 ? "0" : index + 1}`,
      stemuli_user_id: stemuli_user_id,
      user_name: user_name,
      tenant_id: tenant_id,
      user_type_name: user_type_name,
      room_name: room_name,
      created_at: moment(new Date(UserList.created_at)).format("YYYY-MM-DD"),
      activePage: activePage,
    };
  });

  return formatUserListTableData;
};
export const formatRoomUserList = (
  orderList: RoomUserListProp[],
  activePage: number
) => {
  const formatUserListTableData = orderList.map((RoomUserList, index) => {
    const { stemuli_user_id, user_name, user_type_name } = RoomUserList;

    return {
      index: `${
        activePage - 1 === 0
          ? index === 9
            ? activePage
            : ""
          : index === 9
          ? activePage
          : activePage - 1
      }${index == 9 ? "0" : index + 1}`,
      stemuli_user_id: stemuli_user_id,
      user_name: user_name,

      user_type_name: user_type_name,

      activePage: activePage,
    };
  });

  return formatUserListTableData;
};
export const formatRoomList = (
  roomList: Array<RoomListProp>,
  activePage: number
) => {
  const formatRoomListTableData = roomList.map((RoomList, index) => {
    const {
      room_id,
      room_name,
      tenant_id,
      room_type_name,
      user_count,
      status,
    } = RoomList;

    return {
      index: `${
        activePage - 1 === 0
          ? index === 9
            ? activePage
            : ""
          : index === 9
          ? activePage
          : activePage - 1
      }${index == 9 ? "0" : index + 1}`,
      room_id: room_id,
      tenant_id: tenant_id,
      room_type_name: room_type_name,
      room_name: room_name,
      user_count: user_count,
      status:
        status === StatusCode.Active
          ? ButtonName.Active
          : status === StatusCode.InProgress
          ? ButtonName.InProgress
          : status === StatusCode.Deleted
          ? ButtonName.Deleted
          : status === StatusCode.Completed
          ? ButtonName.Completed
          : ButtonName.Pending,
      activePage: activePage,
    };
  });

  return formatRoomListTableData;
};
