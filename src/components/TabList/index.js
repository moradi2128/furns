import styled from "styled-components";

// === Tab Header ===
export const NavTabs = styled.ul`
  display: flex;
  justify-content: center;
`;
export const NavItem = styled.li`
  line-height: 1;
  margin: 0px 30px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  padding-bottom: 15px;
  color: rgb(33, 33, 33);
  transition: all 0.4s ease 0s;
  font-family: Raleway;
  font-weight: 600;
  transition: all 0.3s ease;
  :hover:before {
    background-color: rgb(255, 112, 4);
  }
  :before {
    ${(props) =>
      props.isSelect == props.id && "background-color:rgb(255, 112, 4)"};
    left: 0px;
    right: 0px;
    height: 2px;
    content: "";
    bottom: -1px;
    position: absolute;
    transition: all 0.4s ease 0s;
  }

  @media screen and (max-width: 767px) {
     {
      margin: 0px 10px;
      font-size: 14px;
    }
  }
`;
// === Tab Body ===
export const TabContent = styled.div`
  line-height: 1.7;
  font-size: 15px;
  overflow: hidden;
  line-height: 24px;
  text-align: left;
  padding: 30px;
  border: 1px solid rgb(235, 235, 235);

  @media screen and (max-width: 767px) {
     {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;