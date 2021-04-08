import React, { FC } from "react";
import styled from "styled-components";
import MenuOption from "./MenuOption";
import PlatformSection from "./PlatformSection";
import WorkspacesSection from "./WorkspacesSection";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const ExpandedMenu: FC = () => {
  return (
    <Menu>
      <input placeholder="Filter..."></input>
      <div>
        <span>Platform</span>
        <MenuOption
          source="../../../icons/house2.png"
          alt="houseIcon"
          text="Home"
        />
        <MenuOption
          source="../../../icons/publications.png"
          alt="publicationsIcon"
          text="Publications"
        />
        <MenuOption
          source="../../../icons/people.png"
          alt="peopleIcon"
          text="People"
        />
      </div>
    </Menu>
  );
};
export default ExpandedMenu;
