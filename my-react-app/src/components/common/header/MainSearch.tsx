import React, { FC } from "react";
import styled from "styled-components";
const Input = styled.input`
    border: none;
    width:90%;
    &:focus{
        border: 1px solid #1670BE;
        box-shadow: 0 0 3px #1670BE;
        outline-offset: 0px;
        outline: none;
    }
    ::-webkit-input-placeholder {
    text-align: center;
  }
`;
const Wrapper = styled.div`
    display:flex;
    width: 400px;
    height:37px;
    border: 1px solid #c5c5c5;
    border-radius:3px;
    box-sizing:border-box;
`;
const SearchIcon = styled.div`
    width:40px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color:#a6a6a6;
    }
`;
const MainSearch: FC = () => {
    return (
        <>
            <Wrapper>
                <Input placeholder="Search Illegalcluster" />
                <SearchIcon>
                    <img src="../../../icons/search.png" alt="searchIcon" />
                </SearchIcon>
            </Wrapper>
        </>
    );
};
export default MainSearch;
