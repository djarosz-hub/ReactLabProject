import React, { FC } from "react";
import styled from "styled-components";

interface IMenuOption {
    source: string;
    alt: string;
    text: string;
}
const Wrapper = styled.div`
    width:100%;
    height:30px;
    justify-content:center;
    align-items:center;
`;
const MenuOption: FC<IMenuOption> = (props) => {
    return (
        <Wrapper>
            <img src={props.source} alt={props.alt} />
            {props.text}
        </Wrapper>
    );
};

export default MenuOption;
