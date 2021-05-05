import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IPhotosReducer } from '../../../../reducers/photosReducers';

const Wrapper = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color:#1721a8;
    font-size:12px;
    margin-top:2px;
`;

const ProfileImg = styled.img`
    padding:0 5px;
    max-width: 100%;
    max-height: 100%;
    border-radius:50%;
`;
const TextHolder = styled.div`
    display:flex;
    flex-direction:column;
`;

interface IProfileView {
    userName: string;
    linkTo: string;
    closeDropMenu():void;
}
const ProfileView: FC<IProfileView> = (props) => {

    const optionClick = () => {
        props.closeDropMenu();
    }
    const {photosList} = useSelector<IState, IPhotosReducer>(globalState=>({
        ...globalState.photos
    }));
    return (
        <Wrapper onClick={optionClick}>
            {photosList[0] && <ProfileImg src={photosList[0].url} alt={"userPhoto"}/>}
            <TextHolder>
                {props.userName}
                <CustomLink to={props.linkTo}>
                    See profile
                </CustomLink>
            </TextHolder>
        </Wrapper>
    );
}
export default ProfileView;