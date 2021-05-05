import React, { FC } from "react";
import MenuOption from "./MenuOption";
import {Title, IMenuSection} from "./MenuSection";
import ProfileView from "./ProfileView";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IUsersReducer } from '../../../../reducers/usersReducers';

const Wrapper = styled.div`
`;

const AccountMenuSection: FC<IMenuSection> = (props) => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState =>({
        ...globalState.users
        }));
    
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <ProfileView
                linkTo={"/profile"}
                userName={usersList[0].name}
                closeDropMenu={props.closeDropMenu}
            />
            {props.options.map((el) => <MenuOption
                key={el.text}
                imgSource={el.imgSource}
                alt={el.alt}
                text={el.text}
                linkTo={el.linkTo}
                closeDropMenu={props.closeDropMenu}
            />)}
        </Wrapper>
    );
};

export default AccountMenuSection;