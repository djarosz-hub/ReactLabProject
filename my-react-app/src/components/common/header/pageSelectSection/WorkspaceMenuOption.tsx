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
export interface IWorkspaceMenuOption {
    imgSource: string;
    alt: string;
    text: string;
    linkTo: string;
}

interface IWorkspaceMenuOptionProps extends IWorkspaceMenuOption {
    closeDropMenu(): void;
}

const WorkspaceMenuOption: FC<IWorkspaceMenuOptionProps> = (props) => {

    const optionClick = () => {
        props.closeDropMenu();
    }

    return (
        <CustomLink to={
            {
                pathname: props.linkTo,
                state: {
                    icon: props.imgSource,
                    title: props.text,
                    from: "root"
                }
            }
        }>
            <Wrapper onClick={optionClick}>
                <IconHolder>
                    <img src={props.imgSource} alt={props.alt} />
                </IconHolder>
                {props.text}
            </Wrapper>
        </CustomLink>
    );
};

export default WorkspaceMenuOption;
