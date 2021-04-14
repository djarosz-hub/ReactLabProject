import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    justify-content: center;
    &:hover{
        background-color:#dadada;
    }
    /* position:absolute; */
    
`;
const LogIcon = styled.img.attrs({
    src: "../../../icons/logout.png",
    alt: "logoutIcon",
})``;

const CenterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0 auto;
`;

const Span = styled.span`
    margin-left:10px;
`;

const Logout: FC = () => {
    return (
        <Wrapper>
            <CenterDiv>
                <LogIcon />
                <Span>Logout</Span>
            </CenterDiv>
        </Wrapper>
    );
}
export default Logout;