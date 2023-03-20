import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
import { AppColors, LOGOUT } from "../../lib/constant";
import { menuLinkProps } from "../../lib/types";
import { SidebarData } from "./SidebarData";
import Img from "../Img";

interface LayoutProps {
  Component: React.FC<{}>;
}

export const Layout: React.FC<LayoutProps> = ({ Component }) => {
  const { resetToken } = useContext(AuthContext);
  const router = useRouter();

  const [headerData, setHeaderData] = useState({
    icon: <></>,
    title: "",
    path: "",
  });
  useEffect(() => {
    SidebarData.map(
      (item) => item.path === router.pathname && setHeaderData(item)
    );
  }, [router]);

  return (
    <div>
      <SidebarDiv>
        <AppTitle>CMS Template</AppTitle>

        <SidebarItem>
          {SidebarData.map((item, index) => {
            return (
              <MenuLinkContainer>
                <MenuLink
                  onClick={() => {
                    router.push(item.path);
                  }}
                  key={index}
                  isActive={router.pathname === item.path}
                >
                  <Icon isActive={router.pathname === item.path}>
                    {item.icon}
                  </Icon>

                  <Title
                    style={{
                      flexWrap: "nowrap",
                      textAlign: "left",
                      width: "11rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </Title>
                </MenuLink>
                <DIV isActive={router.pathname === item.path} />
              </MenuLinkContainer>
            );
          })}
        </SidebarItem>
      </SidebarDiv>
      <SidebarRightDiv>
        <Header>
          <HeaderSubText>{LOGOUT}</HeaderSubText>
          <ButtonContainer onClick={resetToken}>
            <Img src={`assets/logout-icon.png`} alt={"logout icon"} />
          </ButtonContainer>
        </Header>
        <PageLayoutOuterContainer>
          <LayoutPageContainer>
            <LayoutTopSquare />
            <LayoutCircle />
            <LayoutBottomSquare />
            <PageContainer>
              <Component />
            </PageContainer>
          </LayoutPageContainer>
        </PageLayoutOuterContainer>
        <CopyRightContainer>
          <CopyRightContent>
            @2022-2030 Stemuli |
            <ReservedContent> All Right Reserved.</ReservedContent>
          </CopyRightContent>
        </CopyRightContainer>
      </SidebarRightDiv>
    </div>
  );
};

const MenuLinkContainer = styled.main`
  display: flex;
  height: 3.5rem;
`;
const DIV = styled.div<menuLinkProps>`
  border-left: 0.4rem solid ${AppColors.White};
  display: ${(props) => (props.isActive ? `block` : `none`)};
  height: 2.3rem;
`;
const ReservedContent = styled.label`
  color: ${AppColors.LightShadeRed};
`;
const CopyRightContent = styled.label`
  font-weight: 600;
`;
const CopyRightContainer = styled.main`
  position: absolute;
  bottom: 1.5rem;
  right: 4.5rem;
  display: flex;
  justify-content: flex-end;
`;
const VerticalLine = styled.div`
  border-left: 0.2rem solid ${AppColors.DarkShadeGrey};
  height: 2.5rem;
  margin-right: 0.5rem;
`;
const ProfileImageContainer = styled.main`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${AppColors.ProfileContainerColor};
`;
const HeaderSubText = styled.label`
  color: ${AppColors.AdminTextColor};
  text-align: end;
  font-weight: 500;
`;
const AdminProfileContainer = styled.main`
  display: flex;
  flex-direction: column;
`;
const PageLayoutOuterContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${AppColors.LightShadeSkyBlue};
`;
const LayoutBottomSquare = styled.div`
  position: absolute;
  left: 3rem;
  background-color: ${AppColors.LightShadePurple};
  width: 10rem;
  height: 10rem;
  bottom: -9rem;
  transform: rotate(30deg);
`;
const LayoutTopSquare = styled.div`
  position: absolute;
  left: -8rem;
  background-color: ${AppColors.LightShadeYellow};
  width: 10rem;
  height: 10rem;
  top: -1rem;
  transform: rotate(30deg);
`;
const LayoutCircle = styled.div`
  position: absolute;
  top: 10rem;
  right: -3.6rem;
  width: 100px;
  height: 200px;
  border-radius: 100px 0 0 100px;
  background-color: ${AppColors.LightShadeOrange};
`;
const Header = styled.div`
  background-color: ${AppColors.White};
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 0rem 4rem;
  align-items: center;
`;

const Icon = styled.div<menuLinkProps>`
  display: flex;
  align-self: center;
  font-size: 1.5rem;
  filter: ${(props) => (props.isActive ? `brightness(0) invert(0)` : `none`)};
`;

const SidebarRightDiv = styled.div`
  width: calc(100% - 15rem);
  float: right;
  height: 100vh;
`;

const SidebarDiv = styled.div`
  width: 15rem;
  background-color: ${AppColors.LightShadeRed};
  height: 100vh;
  text-align: center;
  color: ${AppColors.White};
  position: absolute;
  z-index: 3;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 0rem 2rem;
  align-content: center;
  flex-flow: column wrap;
`;

const MenuLink = styled.button<menuLinkProps>`
  height: 2.3rem;
  border-style: none;
  background: none;
  color: ${(props) =>
    props.isActive ? `${AppColors.Black}` : `${AppColors.AppWhite}`};
  background-color: ${(props) =>
    props.isActive ? `${AppColors.ActiveMenuColor}` : "none"};
  display: flex;
  align-items: center;
  border-radius: ${(props) => (props.isActive ? "0rem" : "none")};
  width: 14.4rem;
  padding: 0.4rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  :hover {
    cursor: pointer;
  }
`;
const Title = styled.span`
  padding-left: 0.875rem;
  @media only screen and (max-device-width: 1112px) {
    display: none;
  }
`;

const LayoutPageContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  :hover {
    background-color: ${AppColors.GreyTwo};
  }
`;

const AppTitle = styled.div`
  width: 13rem;
  padding: 1.2rem 0rem 0rem 1rem;
`;

const PageContainer = styled.div`
  width: 90%;
  height: 90%;
`;
