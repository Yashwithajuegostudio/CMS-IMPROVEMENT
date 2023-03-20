import {
  GLOBAL_ROOM,
  GLOBAL_ROOM_DETAILS,
  ROOM_CREATE,
  ROOM_DELETE,
  ROOM_DETAILS,
  ROOM_LIST,
  ROOM_UPDATE,
  ROOM_USER_LIST,
  USER_LIST,
} from "../lib/apiPath";
import { useLocalStorage } from "../lib/storageLib";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
} from "./apiService";

export const getUserList = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };

    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeGetRequest({
      path: USER_LIST,
      payload,
      headers: header,
    });

    return response;
  } catch (err) {
    throw err;
  }
};

export const getRoomList = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeGetRequest({
      path: ROOM_LIST,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const getRoomDetails = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeGetRequest({
      path: ROOM_DETAILS,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
export const getGlobalRoomDetails = async (): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeGetRequest({
      path: GLOBAL_ROOM_DETAILS,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
export const getRoomUserList = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeGetRequest({
      path: ROOM_USER_LIST,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const postCreateRoom = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makePostRequest({
      path: ROOM_CREATE,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
export const postGlobalRoom = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makePatchRequest({
      path: GLOBAL_ROOM,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
export const postRoomDetailsUpdate = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makePatchRequest({
      path: ROOM_UPDATE,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteRoom = async (reqData?: object): Promise<any> => {
  const [setLocalStorage] = useLocalStorage();
  try {
    const payload = {
      ...reqData,
    };
    const header = {
      access_token: setLocalStorage("GET", "accessToken", ""),
    };

    const response = await makeDeleteRequest({
      path: ROOM_DELETE,
      payload,
      headers: header,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
