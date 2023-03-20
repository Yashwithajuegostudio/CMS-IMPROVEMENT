import { getUserList } from "@/api/roomServices";
import AlertPopUp from "@/components/AlertPopUp";
import Button from "@/components/Button";
import ConfirmationPopUp from "@/components/ConfirmationPopUp";
import PopUp from "@/components/PopUp";
import Toast from "@/components/Toast";
import { AuthContext } from "@/context/AuthProvider";
import {
  AppColors,
  ButtonName,
  CUSTOM_WIDTH,
  FIRST_PAGE,
  MAX_INPUT_FIELD_LENGTH,
  PAGE_LIMIT,
  POP_UP_TYPE,
  QueryParam,
  SEARCH,
  SESSION_EXPIRED,
  USER_LIST_TABLE_HEADER,
  USER_MANAGEMENT_PAGE_HEADER,
  regexExp,
} from "@/lib/constant";
import { useQueryParam } from "@/lib/helper";
import { UserListTableHeader } from "@/lib/tableHeaderHelper";
import { formatUserList } from "@/lib/tableHelper";
import {
  ConfirmationPopUpProps,
  ModelDataProps,
  ToastFieldProps,
} from "@/lib/types";
import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";

import {
  AlertMessage,
  ContentContainer,
  DivBox,
  PageListHeaderContainer,
  PageListTable,
  SearchContainer,
  SearchInputBox,
  SearchLabel,
  TableHeaderTitle,
  TableTitle,
} from "styles/globalStyles";

export interface formDataProps {
  page_number?: number | string;
  limit?: number | string;
  stemuli_user_id?: string;
  user_id?: string;
}
const UserManagement: NextPage = () => {
  const [user_list, setUserList] = useState([]);
  const [userListPopUp, setUserListPopUp] = useState(false);
  const [total_count, setTotal_count] = useState(FIRST_PAGE);
  const [pageSize, setPageSize] = useQueryParam(
    QueryParam.ActivePage,
    String(FIRST_PAGE)
  );
  const [currentPage, setCurrentPage] = useQueryParam(
    QueryParam.ActivePage,
    String(FIRST_PAGE)
  );
  const [searchText, setSearchText] = useQueryParam(QueryParam.SearchQuery, "");
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [alertPopUp, setAlertPopUp] = useState<ConfirmationPopUpProps>({
    show: false,
    message: <></>,
    type: 0,
  });
  const [modelData, setModelData] = useState<ModelDataProps>({
    show: false,
    message: <></>,
    type: false,
  });
  const [toast, setToast] = useState<ToastFieldProps>({
    show: false,
    message: " ",
    type: "error",
    position: "top-right",
  });

  const { resetToken } = useContext(AuthContext);

  useEffect(() => {
    const formData: {
      page_number?: number;
      limit?: number;
      user_name?: string;
      user_id?: string;
      stemuli_user_id?: string;
    } = {
      page_number: parseInt(pageSize) - FIRST_PAGE,
      limit: PAGE_LIMIT,
      user_name: searchText,
      user_id: searchText,
      stemuli_user_id: searchText,
    };

    if (searchText == "") {
      delete formData.user_name;
      delete formData.user_id;
      delete formData.stemuli_user_id;
    } else if (isNaN(Number(searchText))) {
      delete formData.user_id;
      if (regexExp.test(String(searchText))) {
        delete formData.user_id;
        delete formData.user_name;
      } else {
        delete formData.stemuli_user_id;
      }
    } else {
      delete formData.user_name;
      delete formData.stemuli_user_id;
    }

    getUserListData(formData);
  }, [pageSize, shouldLoad]);

  const getUserListData = (formData: formDataProps) => {
    getUserList(formData)
      .then((data) => {
        setLoading(true);
        setUserList(data.user_list);
        setCurrentPage(String(pageSize));

        setTotal_count(Math.ceil(data?.total_count / PAGE_LIMIT));
      })
      .catch((err) => {
        setLoading(false);
        setModelData({
          show: true,
          message: <AlertMessage>{SESSION_EXPIRED}</AlertMessage>,
          type: true,
        });
      });
  };

  const handleSearch = () => {
    setPageSize(String(FIRST_PAGE));
    setShouldLoad(!shouldLoad);
  };

  const onClickSetPageSize = (id: number) => {
    setCurrentPage(String(id));
    setPageSize(String(id));
  };

  const onOkClicksHandler = () => {
    if (modelData.type) {
      setModelData({ show: false, message: <></>, type: false });
      resetToken();
    }
  };

  return (
    <>
      {modelData.show && (
        <PopUp popUptype={"popup"}>
          <AlertPopUp
            message={modelData.message}
            onOkClick={() => {
              onOkClicksHandler();
            }}
          />
        </PopUp>
      )}
      <PageListHeaderContainer>
        <TableTitle>{USER_MANAGEMENT_PAGE_HEADER}</TableTitle>
        <SearchContainer>
          <SearchLabel>{SEARCH} </SearchLabel>
          <SearchInputBox
            type="text"
            name="user_name"
            value={searchText}
            maxLength={MAX_INPUT_FIELD_LENGTH}
            placeholder="User Name/Stemuli User ID"
            onChange={(e: any) => {
              setSearchText(String(e.target.value));
            }}
          />

          <Button
            width={CUSTOM_WIDTH}
            value={ButtonName.Search}
            onClick={() => handleSearch()}
          />
        </SearchContainer>
      </PageListHeaderContainer>
      <ContentContainer width="100%" height="75%">
        <TableHeaderTitle>{USER_LIST_TABLE_HEADER}</TableHeaderTitle>
        {loading && (
          <PageListTable
            columns={UserListTableHeader()}
            data={formatUserList(user_list, parseInt(currentPage))}
            filterValue={""}
            filterBy={[]}
            filterType={"or"}
            isGlobalFilter={false}
            pageSize={PAGE_LIMIT}
            border={`0.5px solid ${AppColors.TableCellColor}`}
            onClickPage={onClickSetPageSize}
            pagination={true}
            totalPage={total_count}
            activePage={parseInt(currentPage)}
          />
        )}

        {userListPopUp && (
          <PopUp
            width="50rem"
            popUptype={POP_UP_TYPE}
            onClick={() => setUserListPopUp(false)}
          >
            <DivBox></DivBox>
          </PopUp>
        )}
        {alertPopUp.show && (
          <PopUp popUptype={POP_UP_TYPE} width="40%">
            <ConfirmationPopUp
              message={alertPopUp.message}
              onCancelClick={() =>
                setAlertPopUp({
                  ...alertPopUp,
                  show: false,
                  message: <></>,
                  type: 0,
                })
              }
            />
          </PopUp>
        )}
        {toast.show && (
          <Toast
            type={toast.type}
            position={toast.position}
            onClose={() => setToast({ ...toast, message: "", show: false })}
            description={toast.message}
          />
        )}
      </ContentContainer>
    </>
  );
};

export default React.memo(UserManagement);
