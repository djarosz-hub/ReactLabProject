import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from './ExpandedMenu';

const Wrapper = styled.div`
    display:flex;
    width:135px;
    color:#1a4986;
    font-weight:1000;
    flex-direction:column;
    position:relative;
`;
const TextWrapper = styled.div`
    display:flex;
    width:135px;
    position:relative;
`;
const IconHolder = styled.div`
  width:30px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;
interface IFollowed {
    myPostsOnly(val: boolean): void;
    header:boolean;
}
const Followed: FC<IFollowed> = (props) => {

    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    };
    const closeMenu = () => {
        closeDropdown();
    }

    return (
        <Wrapper>
            <div ref={wrapperRef}>
                <TextWrapper onClick={menuHandler}>
                    {props.header? 'My posts' : 'All posts'}
                    <IconHolder>
                        <img src="../../../icons/arrow-down.png" alt="arrowDropdown" />
                    </IconHolder>
                </TextWrapper>
                {dropdownOpen && <ExpandedMenu 
                closeDropMenu={closeMenu} 
                myPostsOnly={props.myPostsOnly}/>}
            </div>
        </Wrapper>
    );
};
export default Followed;