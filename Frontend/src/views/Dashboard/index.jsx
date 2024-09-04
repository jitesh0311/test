import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BasicsWrap,
  BellIconWrap,
  CardHeading,
  DashboardBottom,
  DashboardContainer,
  DashboardHeader,
  DashboardInfo,
  DashboardTop,
  GrowthWrap,
  GrowthWrapLeft,
  ProgressBar,
  Score,
  SideBar,
  SideBarBottomSec,
  SideBarChatSec,
  SideBarLogoWrap,
  SideBarSection,
  SideBarSectionWrap,
  TestInfoCard,
  TestInfoWrap,
  PageWrapper,
  Navbar,
  NavItem,
  ButtonGroup,
  Button,
  DataTable,
  TableHeader,
  TableRow,
  TableCell,
  Status,
  MoreOptions,
  IconWrapper,
  ScrollableTbody,
} from "../../styles/Dashboard";
import { BsCloudArrowDown } from "react-icons/bs";
import { BsFunnel } from "react-icons/bs"; 
import { BsSliders } from "react-icons/bs";

import ScaleSecureLogo from "../../assests/Dashboard/icons/icon_logo.svg";
import Home from "../../assests/Dashboard/icons/icon_home.svg";
import CheckList from "../../assests/Dashboard/icons/icon_checklist.svg";
import Load from "../../assests/Dashboard/icons/icon_load.svg";
import Security from "../../assests/Dashboard/icons/icon_security.svg";
import Database from "../../assests/Dashboard/icons/icon_database.svg";
import Crown from "../../assests/Dashboard/icons/icon_crown.svg";
import Document from "../../assests/Dashboard/icons/icon_document.svg";
import Headset from "../../assests/Dashboard/icons/icon_headset.svg";
import Window from "../../assests/Dashboard/icons/icon_window.svg";
import Sharechat from "../../assests/Dashboard/icons/icon_sharechat.svg";
import Basic from "../../assests/Dashboard/icons/icon_basic.svg";
import Bell from "../../assests/Dashboard/icons/icon_bell.svg";
import Profile from "../../assests/Dashboard/icons/icon_profile.svg";
import Info from "../../assests/Dashboard/icons/icon_info.svg";
import Growth from "../../assests/Dashboard/icons/icon_growth.svg";
import RightArrow from "../../assests/Dashboard/icons/icon_right-arrow.svg";

const Dashboard = () => {
  const [isSelected, setIsSelected] = useState("home");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const varToken = JSON.parse(token);
        const response = await fetch(
          "http://localhost:5000/api/v1/bakery/homePage",
          {
            headers: { Authorization: `Bearer ${varToken}` },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
      } catch (err) {
        console.error("Error fetching data:", err.message);
        if (
          err.message === "No token found" ||
          err.message === "Network response was not ok"
        ) {
          navigate("/login");
        }
      }
    };

    fetchData();
  }, [navigate]);

  const sections = [
    {
      id: "home",
      name: Home,
    },
    {
      id: "checklist",
      name: CheckList,
    },
    {
      id: "load",
      name: Load,
    },
    {
      id: "security",
      name: Security,
    },
    {
      id: "database",
      name: Database,
    },
    {
      id: "crown",
      name: Crown,
    },
    {
      id: "document",
      name: Document,
    },
    {
      id: "headset",
      name: Headset,
    },
  ];

  const chatSections = [
    {
      id: "window",
      name: Window,
    },
    {
      id: "sharechat",
      name: Sharechat,
    },
  ];

  const testData = [
    {
      id: 1,
      details: "This is a random big testing name",
      link: "https://dev-nexus.ver...",
      status: "Paused",
      statusColor: "#4E1D09",
      textColor: "#FEB101",
      users: 30,
      duration: "5m 0s",
      startDate: "04/19/2024",
      startTime: "08:43:26 PM",
    },
    {
      id: 2,
      details: "This is a random big testing name",
      link: "https://dev-nexus.ver...",
      status: "Completed",
      statusColor: "#25CC633B",
      textColor: "#22C55E",
      users: 20,
      duration: "5m 0s",
      startDate: "04/19/2024",
      startTime: "08:43:26 PM",
    },
    {
      id: 3,
      details: "This is a random big testing name",
      link: "https://dev-nexus.ver...",
      status: "In Progress",
      statusColor: "#9747FF17",
      textColor: "#9747FF",
      users: 100,
      duration: "5m 0s",
      startDate: "04/19/2024",
      startTime: "08:43:26 PM",
    },
    {
      id: 4,
      details: "This is a random big testing name",
      link: "https://dev-nexus.ver...",
      status: "Paused",
      statusColor: "#4E1D09",
      textColor: "#FEB101",
      users: 50,
      duration: "5m 0s",
      startDate: "04/19/2024",
      startTime: "08:43:26 PM",
    },
    {
      id: 5,
      details: "This is a random big testing name",
      link: "https://dev-nexus.ver...",
      status: "Paused",
      statusColor: "#4E1D09",
      textColor: "#FEB101",
      users: 60,
      duration: "5m 0s",
      startDate: "04/19/2024",
      startTime: "08:43:26 PM",
    },
  ];

  return (
    <DashboardContainer>
      <SideBar>
        <SideBarLogoWrap>
          <img src={ScaleSecureLogo} alt="scale-secure" />
        </SideBarLogoWrap>
        <SideBarBottomSec>
          <SideBarSectionWrap>
            {sections.map((section) => (
              <SideBarSection
                isSelected={isSelected === section.id}
                onClick={() => setIsSelected(section.id)}
              >
                <img src={section.name} />
              </SideBarSection>
            ))}
          </SideBarSectionWrap>

          <SideBarChatSec>
            {chatSections.map((section) => (
              <SideBarSection
                isSelected={isSelected === section.id}
                onClick={() => setIsSelected(section.id)}
              >
                <img src={section.name} />
              </SideBarSection>
            ))}
          </SideBarChatSec>
        </SideBarBottomSec>
      </SideBar>
      <DashboardInfo>
        <DashboardHeader>
          <h2>Home</h2>
          <div>
            <BasicsWrap>
              <img src={Basic} />
              <p>Basic</p>
            </BasicsWrap>
            <BellIconWrap bell={true}>
              <img src={Bell} />
            </BellIconWrap>

            <BellIconWrap>
              <img src={Profile} />
            </BellIconWrap>
          </div>
        </DashboardHeader>
        <DashboardTop>
          <TestInfoWrap>
            <TestInfoCard>
              <CardHeading>
                <p>Tests</p>
                <img src={Info} />
              </CardHeading>
              <Score>29</Score>
              <GrowthWrap>
                <GrowthWrapLeft>
                  <img src={Growth} />
                  <p>+25% from last week</p>
                </GrowthWrapLeft>
                <img src={RightArrow} />
              </GrowthWrap>
            </TestInfoCard>
            <TestInfoCard>
              <CardHeading>
                <p>Virtual Users</p>
                <img src={Info} />
              </CardHeading>
              <Score>
                32<span>/50</span>
              </Score>
              <GrowthWrap>
                <GrowthWrapLeft>
                  <ProgressBar>
                    <div></div>
                  </ProgressBar>
                </GrowthWrapLeft>
                <img src={RightArrow} />
              </GrowthWrap>
            </TestInfoCard>
            <TestInfoCard>
              <CardHeading>
                <p>Minutes Used</p>
                <img src={Info} />
              </CardHeading>
              <Score>
                30<span>/50</span>
              </Score>
              <GrowthWrap>
                <GrowthWrapLeft>
                  <ProgressBar>
                    <div></div>
                  </ProgressBar>
                </GrowthWrapLeft>
                <img src={RightArrow} />
              </GrowthWrap>
            </TestInfoCard>
          </TestInfoWrap>
        </DashboardTop>
        <PageWrapper>
          <Navbar>
            <NavItem active>Load</NavItem>
            <NavItem>Security</NavItem>
            <NavItem>Architecture</NavItem>
            <ButtonGroup>
              <Button>
                <IconWrapper>
                  <BsCloudArrowDown />
                </IconWrapper>
                Download All
              </Button>
              <Button>
                <IconWrapper>
                  <BsFunnel />
                </IconWrapper>
                More Filters
              </Button>
              <Button>
                <IconWrapper>
                  <BsSliders />
                </IconWrapper>
                Sort By
              </Button>
            </ButtonGroup>
          </Navbar>

          <DataTable>
            <thead>
              <tr>
                <TableHeader>Test Details</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Virtual Users</TableHeader>
                <TableHeader>Duration</TableHeader>
                <TableHeader>Start Time</TableHeader>
                <TableHeader></TableHeader>
              </tr>
            </thead>
            <ScrollableTbody>
              <tbody>
                {testData.map((item, index) => (
                  <TableRow key={item.id} active={index === 0}>
                    <TableCell>
                      {item.details} <br />
                      <a
                        href="#"
                        style={{ color: "#9747FF", textDecoration: "none" }}
                      >
                        {item.link}
                      </a>
                    </TableCell>
                    <TableCell>
                      <Status
                        TextColor={item.textColor}
                        color={item.statusColor}
                      >
                        {item.status}
                      </Status>
                    </TableCell>
                    <TableCell>{item.users}</TableCell>
                    <TableCell>{item.duration}</TableCell>
                    <TableCell>
                      {item.startDate} <br /> <span>{item.startTime}</span>
                    </TableCell>
                    <TableCell>
                      <MoreOptions />
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </ScrollableTbody>
          </DataTable>
        </PageWrapper>
      </DashboardInfo>
    </DashboardContainer>
  );
};

export default Dashboard;
