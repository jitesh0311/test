import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100dvh;
  /* height: 100%; */
  display: flex;
  overflow-y: hidden;
`;

export const SideBar = styled.div`
  width: 100%;
  max-width: 80px;
  height: 100%;
  background-color: #1a1d1f;
`;

export const SideBarLogoWrap = styled.div`
  border-bottom: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: pointer;
`;

export const SideBarBottomSec = styled.div`
  width: 100%;
  max-height: calc(100vh - 96px);
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideBarSectionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  background-color: #1a1d1f;
`;
export const SideBarSection = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "#9747FF" : "transparent"};
  opacity: ${(props) => (props.isSelected ? "1" : "0.7")};
  cursor: pointer;
  padding: 10px;
  border-radius: 12px;

  img {
    width: 32px;
  }
`;

export const SideBarChatSec = styled(SideBarSectionWrap)`
  display: flex;
  justify-content: flex-end;
  margin-top: unset;
  padding-top: 80px;
  padding-bottom: 16px;

  img {
    width: 32px;
  }
`;

export const DashboardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #11141f;
`;

export const DashboardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  border-bottom: 1px solid #333333;

  h2 {
    color: #fff;
    font-size: 28px;
    line-height: 20px;
    font-weight: 700;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
`;

export const BasicsWrap = styled.div`
  width: 102px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #444444;
  border-radius: 6px;

  p {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export const BellIconWrap = styled.div`
  img {
    width: 42px;
    height: 42px;
  }
`;

export const DashboardTop = styled.div`
  width: 100%;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
`;

export const TestInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 36px;
`;

export const TestInfoCard = styled.div`
  width: 100%;
  max-width: 330px;
  background-color: #161a27;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardHeading = styled.div`
  display: flex;
  gap: 10px;

  p {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }

  img {
    cursor: pointer;
  }
`;

export const Score = styled.h2`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 87px;

  span {
    color: #787878;
    font-weight: 500;
  }
`;

export const GrowthWrap = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #22c55e;
  }

  > img {
    padding: 12px;
    background-color: #2c2e35;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const GrowthWrapLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 21px;
  }
`;

export const ProgressBar = styled.div`
  width: 218px;
  height: 20px;
  border-radius: 10px;
  background-color: #272d40;
  display: flex;
  align-items: center;
  padding-left: 4px;

  > div {
    width: 129px;
    height: 14px;
    background-color: #9747ff;
    border-radius: 8px;
  }
`;

export const DashBoardDetails = styled.div``;
export const PageWrapper = styled.div`
  background-color: #161a27;
  color: #ffffff;
  min-height: 100vh;
  padding: 30px;
  margin-left: 20px;
  border-radius: 20px;
`;

export const Navbar = styled.nav`
  display: flex;
  padding: 10px 0;
  border-bottom: 2px solid #2c2f3f;
`;

export const NavItem = styled.div`
  margin-right: 30px;
  padding-bottom: 5px;
  color: ${(props) => (props.active ? "#ffffff" : "#6c7280")};
  border-bottom: ${(props) => (props.active ? "3px solid #6f3be1" : "none")};
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const Button = styled.button`
  background-color: #2c2f3f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #3d404e;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #7578a4;
`;

export const DataTable = styled.table`
  width: 100%;

  margin-top: 20px;
  border-collapse: collapse;

  tr {
    background-color: #11141f;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  
  }
`;

export const ScrollableTbody = styled.div`
  max-height: calc(100vh - 500px); /* Set the desired height */
  overflow-y: auto;
  display: block;
  width: 100%; /* Ensure it takes up the full width of the table */
  scrollbar-width: none;
`;

export const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid #3d404e;
`;

export const TableRow = styled.tr`
  background-color: ${(props) => (props.active ? "#9747FF1A" : "#11141f")};
  &:hover {
    background-color: #11141f;
  }
`;

export const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #3d404e;

  span {
    color: #a1a1aa;
    font-size: 15px;
  }
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.color};
  color: ${(props) => props.TextColor};
  border-radius: 4px;
  border: 1px solid ${(props) => props.TextColor};
  padding: 2px 8px;
  font-size: 0.85rem;
  font-weight: bold;

  &::before {
    content: "●";
    font-size: 1.2rem;
    margin-right: 5px;
  }
`;

export const MoreOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "⋮";
    font-size: 1.2rem;
    color: #7578a4;
  }
`;
