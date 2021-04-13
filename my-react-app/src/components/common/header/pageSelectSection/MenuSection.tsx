import React, { FC } from "react";
import styled from "styled-components";
import MenuOption,{IMenuOption} from "./MenuOption";
const Wrapper = styled.div`

`;
const Title = styled.div`
    font-size:15px;
    color:#a6a6a6;
    font-weight:600;
    margin: 5px;
`;
export interface IMenuSection {
    title: string;
    options: IMenuOption[];
}
const MenuSection: FC<IMenuSection> = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            {props.options.map((el) => <MenuOption
                key={el.text}
                imgSource={el.imgSource}
                alt={el.alt}
                text={el.text}
                linkTo={el.linkTo}
            />)}
        </Wrapper>
    );
};
export default MenuSection;