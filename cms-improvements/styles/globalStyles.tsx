import styled from "styled-components";
import { AppColors } from "../src/lib/constant";
import {
  contentContainerProps,
  InputProps,
  mainPageContainerProps,
} from "../src/lib/types";
import Table from "../src/components/Table";

export const ContentContainer = styled.div<contentContainerProps>`
  height: ${(props) => (props.height ? props.height : "90%")};
  width: ${(props) => (props.width ? props.width : "90%")};
  padding: 1.5rem;
  background-color: ${AppColors.White};
  border-radius: 1.5rem;
  margin-top: 3rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;

export const MainPageContainer = styled.div<mainPageContainerProps>`
  height: ${(props) => (props.height ? props.height : "90%")};
  width: ${(props) => (props.width ? props.width : "90%")};
  padding: ${(props) => (props.padding ? props.padding : "1.5rem")};
  background-color: ${AppColors.AppWhite};
  overflow: auto;
  overflow-x: hidden;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;

export interface ContainerProps {
  direction?: "row" | "column";
  textAlign?: "left" | "right";
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
  boxShadow?: string;
  labelWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Label = styled.label<ContainerProps>`
  direction: ${(props) => (props.direction === "column" ? "column" : "row")};
  display: block;
  align-self: flex-start;
  margin: auto 0.3rem;
  font-size: 0.9rem !important;
  color: ${AppColors.TextColor};
  text-align: ${(props) => (props.textAlign === "right" ? "right" : "left")};
  width: ${(props) => (props.labelWidth ? props.labelWidth : "none")};
`;

export const Page = styled(Container)`
  background: ${AppColors.BgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

export const DivBox = styled.div`
  color: ${AppColors.Black};
  width: 100%;
`;

export const CommonHeader = styled.h2`
  color: ${AppColors.LightPurple};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
`;

export const FallBackPage = styled.div`
  width: 100%;
  height: 100vh;
`;

export const FormContainer = styled.form<ContainerProps>`
  border-radius: 0.5rem;
  padding: ${(props) => (props.padding ? props.padding : "0rem")};
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  background: ${AppColors.ContainerBg};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`;

export const TableContainer = styled.div`
  padding-top: 1.5rem;
  overflow-x: auto;
  height: 96% !important;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Header = styled.span`
  color: ${AppColors.headerTextColor};
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
  font-weight: 700;
`;
export const MessageContainer = styled.p`
  position: absolute;
  bottom: 0;
  right: 2rem;
  color: ${AppColors.DarkRed};
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem 0 2rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: ${AppColors.TextColor};
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 100vh;
  background-color: ${AppColors.White};
`;

export const ProductNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.Primary};
  color: ${AppColors.White};
`;
export const ProductText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

export const ProductVersion = styled.h6`
  font-size: 1.2rem;
  font-weight: 450;
  padding: 0;
  margin: 0;
`;

export const LoginFormContainer = styled.div`
  width: 60%;
  margin: auto;
  background-color: #fff;
`;
export const MonetoryBlockStatusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.5rem;
  height: 1.5rem;
  accent-color: ${AppColors.White};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  gap: 2rem;
  margin-left: 1rem;
`;

export const MonetoryLabel = styled.label`
  align-self: center;
`;

export interface ContainerProps {
  direction?: "row" | "column";
  textAlign?: "left" | "right";
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
  boxShadow?: string;
  labelWidth?: string;
}

export const LabelText = styled.p``;

export const RewardTextFieldContainer = styled.div``;

export const InputComp = styled.input<InputProps>`
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  border: 1px solid ${AppColors.GreyOne};
  border-radius: 0.25rem;
  box-sizing: border-box;
  text-align: ${(props) => props.align};
  :focus {
    outline: 1px solid ${AppColors.Grey};
  }
  cursor: ${(props) => props.cursor && props.cursor};
`;
export const SearchInputBox = styled.input`
  padding: 0.7rem;
  width: 25rem;
  border: 1px solid ${AppColors.GreyOne};
  border-radius: 1.5rem;
  box-shadow: 0px 0px 20px ${AppColors.InputBoxShadowColor};
  :focus {
    outline: 1px solid ${AppColors.Grey};
  }
  @media screen and (max-width: 1400px) and (min-width: 1260px) {
    width: 19rem;
  }
  @media screen and (max-width: 1260px) {
    width: 15rem;
  }
`;
export const SearchLabel = styled.label`
  white-space: nowrap;
`;
export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const TableTitle = styled.div`
  color: ${AppColors.Black};
  font-size: 2rem;
  font-weight: 600;
  display: flex;
`;
export const PageListHeaderContainer = styled(GridContainer)`
  height: 9%;
`;

export const TableHeaderTitle = styled.h1`
  color: ${AppColors.TableTitleColor};
  white-space: nowrap;
  margin: 0rem;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 0.2rem solid ${AppColors.TableTitleColor};
  width: 4rem;
  height: 3rem;
  border-radius: 0.1rem;
`;
export const PageListTable = styled(Table)`
  height: 91%;
`;
export const AlertMessage = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
export const TableStatusContainer = styled.div`
  display: flex;
  width: 24rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;
export const PopUpMessageContainer = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  color: ${AppColors.Black};
`;
export const TableHeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
`;
