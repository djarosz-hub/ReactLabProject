import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconHolder } from "./PageSelect";

const Wrapper = styled.div`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    &:hover{
        background-color:#a5a5a5;
    }
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:black;
`;
export interface IMenuOption {
    imgSource: string;
    alt: string;
    text: string;
    linkTo: string;
}
function optionClick(link: string) {
    return function () {
        console.log(link);
    }
}
const MenuOption: FC<IMenuOption> = (props) => {
    return (
        <CustomLink to={props.linkTo}>
            <Wrapper onClick={optionClick(props.linkTo)}>
                <IconHolder>
                    <img src={props.imgSource} alt={props.alt} />
                </IconHolder>
                {props.text}
            </Wrapper>
        </CustomLink>
    );
};

export default MenuOption;
