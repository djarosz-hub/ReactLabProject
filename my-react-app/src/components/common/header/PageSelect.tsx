import React, { FC } from "react";
import styled from "styled-components";
import ExpandedMenu from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";
import IconHolder from "../../IconHolder";

const ActualPageName = styled.div`
  width: 150px;
  margin: 30px;
`;
const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerWrapper = styled(Wrapper)`
  width: 150px;
`;

const PageSelect: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    console.log("kliku");
    toggleDropdown();
  };
  return (
    <Wrapper>
      <div ref={wrapperRef}>
        <InnerWrapper onClick={menuHandler}>
          <IconHolder source="../../../icons/house2.png" alt="inSearchLogo" />
          <ActualPageName>Home</ActualPageName>
          <IconHolder
            source="../../../icons/arrow-down.png"
            alt="arrowDropdown"
          />
        </InnerWrapper>
        {dropdownOpen && <ExpandedMenu />}
      </div>

      {/* <img src="../../../icons/house2.png" alt="inSearchLogo"></img>
      <Select>
        <option value="home">Home</option>
        <option value="inne">Inne</option>
      </Select> */}
    </Wrapper>
  );
};
export default PageSelect;
