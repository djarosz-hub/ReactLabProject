import React, { FC } from "react";
import styled from "styled-components";
import MainSearch from "./MainSearch";
import PageSelect from "./pageSelectSection/PageSelect";
import IconHolder from "./IconHolder";
import FakeIconHolder from "./FakeIconHolder";

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:space-between;
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
const LogoAndSelectHolder = styled.div`
    display:flex;
    align-items:center;
`;
const MainHeader: FC = () => {

    return (
        <Wrapper>
            <LogoAndSelectHolder>
                <HeaderLogo>
                    <img src="../../../icons/ecosystem.png" alt="headerLogo" />
                </HeaderLogo>
                <PageSelect />
            </LogoAndSelectHolder>
            <MainSearch />
            <Icons>
                <IconHolder
                    source="../../../icons/house.png"
                    alt="houseLogo"
                    linkTo="/"
                />
                <FakeIconHolder
                    source="../../../icons/comments.png"
                    alt="commentsLogo"
                    fakeNotCounter={5}
                />
                <FakeIconHolder
                    source="../../../icons/bell.png"
                    alt="alertLogo"
                    fakeNotCounter={10}
                />
            </Icons>
        </Wrapper>
    );
};
export default MainHeader;
