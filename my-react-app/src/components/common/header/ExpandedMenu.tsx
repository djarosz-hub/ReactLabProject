import React, { FC } from "react";
import styled from "styled-components";
import MenuOption from "./MenuOption";
import PlatformSection from "./PlatformSection";
import WorkspacesSection from "./WorkspacesSection";

const Menu = styled.div`
    display:flex;
    flex-direction:column;
`;
const ExpandedMenu: FC = () => {
    return (
      <Menu>
          <input placeholder="Filter..."></input>
          <span>Platform</span>
          <MenuOption
            source="../../../icons/house2.png"
            alt="houseIcon"
            text="Home"
          />
      </Menu>
    );
  };
  export default ExpandedMenu;