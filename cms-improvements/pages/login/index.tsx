import { makePostRequest } from "@/api/apiService";
import Form from "@/components/Form";
import FormButtonStack from "@/components/FormButtonStack";
import FormDataFieldStack from "@/components/FormDataFieldStack";
import Img from "@/components/Img";
import Toast from "@/components/Toast";
import { AuthContext } from "@/context/AuthProvider";
import { USER_LOGIN } from "@/lib/apiPath";
import {
  AppColors,
  ButtonName,
  LANDING_PAGE,
  LOGIN_FORM_HEADER,
  LOGIN_FORM_SUB_HEADER,
  MANDATORY_FIELD,
} from "@/lib/constant";
import { loginStackList } from "@/lib/formStackHelper";
import { routerNavigation } from "@/lib/helper";
import { useLocalStorage } from "@/lib/storageLib";
import { ToastFieldProps, buttonFieldProps } from "@/lib/types";
import { NextPage } from "next";
import { useContext, useState } from "react";

import styled from "styled-components";

interface loginDataProps {
  user_name: string;
  password: string;
}

const Login: NextPage = () => {
  const { setToken } = useContext(AuthContext);
  const [setLocalStorage] = useLocalStorage();
  const [isLoginBtnClicked] = useState<Boolean>(false);
  const { Login } = ButtonName;
  const { dataFieldList } = loginStackList();
  const [popUp, setPopUp] = useState<ToastFieldProps>({
    show: false,
    message: " ",
    type: "error",
    position: "top-right",
  });

  const formValidation = (formData: loginDataProps) => {
    if (!formData.user_name || !formData.password) {
      setPopUp({
        ...popUp,
        show: true,
        type: "info",
        position: "top-right",
        message: MANDATORY_FIELD,
      });
    } else {
      return true;
    }
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const formData = {
      user_name: target.email.value,
      password: target.password.value,
    };
    if (formValidation(formData)) {
      try {
        const res = await makePostRequest({
          path: USER_LOGIN,
          payload: formData,
        });
        if (res) {
          setToken(res.access_token);
          setLocalStorage("SET", "accessToken", res.access_token);
          setLocalStorage("SET", "userId", res.access_token);
          routerNavigation(LANDING_PAGE);
        }
      } catch (e) {
        setPopUp({
          ...popUp,
          show: true,
          message: `${e}`,
        });
      }
    }
  };

  const buttonList: buttonFieldProps = {
    property: [
      {
        type: "submit",
        value: Login,
        disabled: isLoginBtnClicked ? true : false,
      },
    ],
  };

  const formHeaderProps = {
    header: "Login ",

    style: {
      whiteSpace: "pre",
    },
    subContent: "Welcome! please  login to your account",
  };

  return (
    <LoginPageContainer>
      <ProductNameContainer></ProductNameContainer>
      <LoginOuterContainer>
        <LoginFormContainer>
          <Form
            margin="2rem 0rem 0rem 0rem"
            formHeader={formHeaderProps}
            formBodyStack={[
              <FormDataFieldStack dataFieldStackList={dataFieldList} />,
            ]}
            formFooterStack={[<FormButtonStack buttonStackList={buttonList} />]}
            onFormSubmit={onFormSubmit}
            boxShadow="none"
          />
        </LoginFormContainer>
      </LoginOuterContainer>
      {popUp.show && (
        <Toast
          type={popUp.type}
          position={popUp.position}
          onClose={() => setPopUp({ ...popUp, message: "", show: false })}
          description={popUp.message}
        />
      )}
    </LoginPageContainer>
  );
};

export default Login;

const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  height: 100vh;
  background-color: ${AppColors.White};
`;

const ProductNameContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.LightShadeOrange};
`;
const LoginFormContainer = styled.div`
  width: 60%;
  margin: auto;
  background-color: ${AppColors.White};
`;
const LoginOuterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
