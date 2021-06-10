import React, { FC } from "react";
import styled from "styled-components";
import WorkspaceMenuOption, { IWorkspaceMenuOption } from "./WorkspaceMenuOption";

export const Title = styled.div`
    font-size:15px;
    color:#a6a6a6;
    font-weight:600;
    margin: 5px;
`;
export interface IWorkspaceMenuSection {
    title: string;
    options: IWorkspaceMenuOption[];
    closeDropMenu(): void;
}
const MenuSection: FC<IWorkspaceMenuSection> = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
            {props.options.map((el) => <WorkspaceMenuOption
                key={el.text}
                imgSource={el.imgSource}
                alt={el.alt}
                text={el.text}
                linkTo={el.linkTo}
                closeDropMenu={props.closeDropMenu}
            />)}
        </>
    );
};

export default MenuSection;