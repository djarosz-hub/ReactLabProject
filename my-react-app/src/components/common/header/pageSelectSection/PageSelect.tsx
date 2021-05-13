import React, { FC } from "react";
import styled from "styled-components";
import ExpandedMenu from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction:column;
  position:relative;
`;

const ActualPageName = styled.div`
  width: 150px;
  margin: auto 0;
`;
const InnerWrapper = styled(Wrapper)`
  width: 210px;
  flex-direction:row;
  position:relative;
  margin:5px 0;
`;
export const IconHolder = styled.div`
  width:40px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const PageSelect: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    
    const menuHandler = () => {
        toggleDropdown();
    };

    const closeMenu = () => {
        closeDropdown();
    }
    const location = useLocation();

    const locationHandler = (path: string): string => {
        switch (path) {
            case "/":
                return "Home";
            case "/entities":
                return "Entities";
            case "/workspaces":
                return "Workspaces";
            case "/profile":
                return "Profile";
            default:
                return "Test";
        }
    }
    return (
        <Wrapper>
            <div ref={wrapperRef}>
                <InnerWrapper onClick={menuHandler}>
                    <IconHolder>
                        <img src="../../../icons/house2.png" alt="inSearchLogo" />
                    </IconHolder>
                    <ActualPageName>{locationHandler(location.pathname)}</ActualPageName>
                    <IconHolder>
                        <img src="../../../icons/arrow-down.png" alt="arrowDropdown" />
                    </IconHolder>
                </InnerWrapper>
                {dropdownOpen && <ExpandedMenu closeDropMenu={closeMenu} />}
            </div>
        </Wrapper>
    );
};
export default PageSelect;
