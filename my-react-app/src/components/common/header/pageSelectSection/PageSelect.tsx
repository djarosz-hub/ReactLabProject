import React, { FC } from "react";
import styled from "styled-components";
import ExpandedMenu from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";

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
  width: 220px;
  flex-direction:row;
  position:relative;
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
    const closeMenu = () =>{
        closeDropdown();
    }
    return (
        <Wrapper>
            <div ref={wrapperRef}>
                <InnerWrapper onClick={menuHandler}>
                    <IconHolder>
                        <img src="../../../icons/house2.png" alt="inSearchLogo" />
                    </IconHolder>
                    <ActualPageName>Home</ActualPageName>
                    <IconHolder>
                        <img src="../../../icons/arrow-down.png" alt="arrowDropdown" />
                    </IconHolder>
                </InnerWrapper>
                {dropdownOpen && <ExpandedMenu closeDropMenu={closeMenu}/>}
            </div>
        </Wrapper>
    );
};
export default PageSelect;
