import React, { FC } from "react";
import MenuOption from "./MenuOption";
import {Title, IMenuSection} from "./MenuSection";
import ProfileView from "./ProfileView";
import styled from "styled-components";

const Wrapper = styled.div`
`;
const AccountMenuSection: FC<IMenuSection> = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <ProfileView
                linkTo={"/profile"}
                userName={"Jan Kowalski"}
            />
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

export default AccountMenuSection;