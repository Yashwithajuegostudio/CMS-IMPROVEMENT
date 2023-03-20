//constant file

//API response code
export const SUCCESS_CODE = 100001;
export const INVALID_ACCESS_TOKEN = 100007;

//password minium requirement
export const MAX_INPUT_FIELD = 9999999999999;

//login type
export const LOGIN_TYPE = {
  EMAIL: "1",
};

//Button names
export const BACK = "Back";

//Loadable Constants
export const HAS_DATA = "hasData";
export const HAS_ERROR = "hasError";
export const LOADING = "loading";

//Constant Values
export const DELETE_ROOM_MESSAGE = "Are you sure want to delete the Room?";
export const SAVE_CREATE_ROOM = "Are you sure want to create a Room ";
export const EDIT_ROOM = "Are you sure want to update the Room";

//PopUp Constants
export const ALERT = "alert";
export const BUNDLE = "bundle";

export const TWO_DECIMAL_PLACES = "0.01";

//Toast Messages
export const DATA_UPDATED_SUCCESS = "Data Updated Successfully!!";
export const DATA_DELETE_SUCCESS = "Data Deleted Successfully!!";

export const SUCCESS = "success";
export const ERROR = "error";
export const TOP_RIGHT = "top-right";

//Button text
export const LOGIN_BUTTON_TEXT = "Login";
export const SUBMIT_BUTTON = "Submit";
export const CANCEL_BUTTON = "Cancel";

//Button Type
export const SUBMIT_TYPE = "submit";
export const RESET_TYPE = "reset";

//popup message
export const MANDATORY_FIELD = "Form fields are mandatory!!!";
export const ROOM_NAME_ERROR = `room name should only contain alphanumeric character, "_", "-"`;
export const UPDATE_SUCCESS = "updated successfully";
export const SOMETHING_WENT_WRONG = "Something Went Wrong!!";
export const SESSION_EXPIRED = "Session expired! Please login again";
export const ROOM_CREATE_IN_SUCCESS = "Room created successfully!!!";
export const ROOM_EDIT_IN_SUCCESS = "Room updated successfully!!";

//Page path
export const LOGIN_PATH = "/login";
export const LANDING_PAGE = "/";
export const ROOM_MANAGEMENT_PAGE = "/RoomManagement";
export const ROOM_CREATE_PAGE = "/CreateRoom";
export const GLOBAL_ROOM_MANAGEMENT_PAGE = "/GlobalRoomManagement";
export const UER_MANAGEMENT_PAGE = "/UserManagement";

//form header
export const LOGIN_FORM_HEADER = "STEMULI";
export const LOGIN_FORM_SUB_HEADER = " Admin Panel";
export const SIGN_UP_FORM_HEADER = "SIGN UP";
export const CREATE_ROOM_FORM_HEADER = "Room Management- Create Room";
export const GLOBAL_ROOM_MANAGEMENT = "Global Room Management";
export const EDIT_ROOM_FORM_HEADER = "Room Management- Edit Room";
export const ROOM_MANAGEMENT_PAGE_HEADER = "Room Management";
export const USER_MANAGEMENT_PAGE_HEADER = "User Management";
export const USER_LIST_TABLE_HEADER = "User List";
export const ROOM_LIST_TABLE_HEADER = "Room List";
export const EDIT_ROOM_TABLE_HEADER = "Edit Room";
export const CREATE_ROOM_TABLE_HEADER = "Create Room";
export const SUCCESS_MESSAGE = "Data Inserted Successfully";
export const ERROR_MESSAGE = "Something went wrong";
export const DELETE_MESSAGE = "Room Deleted Successfully";
export const GAME_UPDATE_MESSAGE =
  "Are You sure,you want to Change player Rank?";
//label text
export const SEARCH = "Search By: ";
export const LOGOUT = "Logout";

//Styles
export const PRIMARY_BUTTON_VARIANT = "primary";
export const SECONDARY_BUTTON_VARIANT = "secondary";
export const FULL_WIDTH = "full";
export const CUSTOM_WIDTH = "custom";
export const FIXED_WIDTH = "fixed";
export const ROW_DIRECTION = "row";
export const COLUMN_DIRECTION = "column";
export const PRIMARY_COLOR = "primary";
export const SECONDARY_COLOR = "secondary";

//Pop Up type
export const FROM_POP_UP_TYPE = "form";
export const POP_UP_TYPE = "popup";

//date format
export const DEFAULT_DATE_FORMAT = " YYYY-MM-DD";
export const DEFAULT_TIME_FORMAT = "HH:mm";

export const Border_half_curved = "halfCurved";

export const ButtonName = {
  Login: "LOGIN",
  Submit: "Submit",
  Cancel: "Cancel",
  Save: "Save",
  Deleted: "Deleted",
  Completed: "Completed",
  Active: "Active",
  InProgress: "InProgress",
  Pending: "Pending",
  Search: "Search",
  Users: "Users >",
  Edit: "Edit",
  Delete: "Delete",
  CreateRoom: "+  Create Room",
  ViewRoomUserList: "View Room User List",
};

//  query Parameter name
export enum QueryParam {
  SearchStatus = "searchStatus",
  SearchQuery = "searchQuery",
  RoomStatus = "roomStatus",
  ActivePage = "activePage",
  ActiveUserPage = "activeUserPage",
}
export enum AppColors {
  Primary = "#1C1A38",
  Secondary = "#FFFFFF",
  AppWhite = "#f8f8f8",
  White = "#ffffff",
  Black = "#000000",
  Grey = "#999999",
  GreyOne = "#ccc",
  BgColor = "#F0F2F5",
  LightGrey = "#d3d3d3",
  DarkGrey = "rgb(133 129 129 / 88%)",
  BlackOverlay = "#0000009f",
  Violet = "#2a132e",
  Blue = "#1c1a38",
  Active = "rgba(221,221,221,0.4)",
  GreyTwo = "#d3d3d37a",
  LighterGrey = "#d3d3d3",
  LightYellow = "#f0ad4e",
  LightGreen = "#90EE90",
  LightBlue = "#add8e6",
  LightRed = "#ffcccb",
  DarkRed = "#C90000",
  LightBrown = "#d3d3d333",
  ContainerBg = "rgb(255, 255, 255)",
  TextColor = "#444444",
  BlackText = "rgba(0,0,0,.85)",
  BgContainer = "#f9fafc",
  headerTextColor = "#7042f7",
  BgGrey = "#DADADA",
  BtnBlue = "#3B86FF",
  LightPurple = "#A78AFF",
  DarkPurple = "#7042f7",
  BgGreyContainer = "#F5F6FA",
  GreyThree = "#4D4F5C",
  SkyBlue = "#3b86ff",
  Danger = "#b70000",
  Green = "#007000",
  ParotGreen = "#08db08",
  LightShadeYellow = "#FEB661",
  LightShadeOrange = "#FF6F57",
  LightShadePurple = "#B462F5",
  LightShadeRed = "#FF6D56",
  LightShadeGrey = "#B3B3B3",
  DarkShadeGrey = "#B1B1B1",
  TableHeaderColor = "#B9B9B9",
  LightShadeSkyBlue = "#F4F7FE",
  InputBoxShadowColor = "rgba(0, 0, 0, 0.1)",
  TableTitleColor = "#FF6D54",
  AdminTextColor = "#B2B2B2",
  ProfileContainerColor = "#FFB560",
  TableBoxShadeColor = "rgba(0, 0, 0, 0.1)",
  TableCellColor = "#B9B9B9",
  TableCellBgColor = "rgba(255, 255, 255, 1e-05)",
  ActiveMenuColor = "#FFC4BC",
  StatusBtnColor = "#FFB55F",
  DisabledInputField = "#E2E2E2",
  EditBtnColor = "#76B2FF",
  DeleteBtnColor = "#FA5B5B",
  LightShadeGreen = "#63D76F",
}

export const MODEL_TYPE = {
  CONFIRMATION: 1,
  ALERT: 2,
};

// Date Format
export const regexExp =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

//Character limitation
export const MAX_INPUT_FIELD_LENGTH = 36;
export const MAX_NUMBER_LIMIT = 20;

export const RoomOptions = [
  {
    label: "Custom",
    value: 1,
    type: 1,
  },
  { label: "Playground", value: 2, type: 2 },
];
export const RoomStatusOptions = [
  {
    label: "Active",
    value: 1,
    type: 1,
  },
  // {
  //   label: "In progress",
  //   value: 2,
  //   type: 2,
  // },
  {
    label: "Pending",
    value: 5,
    type: 5,
  },
  {
    label: "Deleted",
    value: 3,
    type: 3,
  },
  // {
  //   label: "completed",
  //   value: 4,
  //   type: 4,
  // },
];

export const FIRST_PAGE = 1;
export const PAGE_LIMIT = 10;

// status code
export const enum StatusCode {
  Active = 1,
  InProgress = 2,
  Deleted = 3,
  Completed = 4,
  Pending = 5,
}

export const enum SearchStatus {
  true = "true",
  false = "false",
}
