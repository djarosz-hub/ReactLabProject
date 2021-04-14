import React, { FC } from "react";
import styled from "styled-components";
import MainSearch from "./MainSearch";
import PageSelect from "./pageSelectSection/PageSelect";
import IconHolder from "./IconHolder";

const Wrapper = styled.div`
    width: 1200px;
    height: 50px;
    align-items: center;
    display: flex;
    box-shadow: -0px 5px 5px #c5c5c5;
    z-index:1000;
`;
const HeaderLogo = styled.div`
    width:50px;
    height:50px;
    margin-right:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Icons = styled.div`
    width: 400px;
    display: flex;
    justify-content: flex-end;
    padding-right:10px;
    box-sizing:border-box;
`;

const MainHeader: FC = () => {

    return (
        <Wrapper>
            <HeaderLogo>
                <img src="../../../icons/ecosystem.png" alt="headerLogo" />
            </HeaderLogo>
            <PageSelect />
            <MainSearch />
            <Icons>
                <IconHolder
                    source="../../../icons/house.png"
                    alt="houseLogo"
                />
                <IconHolder
                    source="../../../icons/comments.png"
                    alt="commentsLogo"
                />
                <IconHolder
                    source="../../../icons/bell.png"
                    alt="alertLogo"
                />
            </Icons>
        </Wrapper>
    );
};
export default MainHeader;
