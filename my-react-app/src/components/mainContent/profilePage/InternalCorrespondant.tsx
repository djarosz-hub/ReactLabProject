import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IconHolder } from './Profile';
import { ISingleUser } from '../../../entities/users';
import { ISinglePhoto } from '../../../entities/photos';

const Wrapper = styled.div`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    position:relative;
    background:#eeeeee;
    margin:1px 0;
`;

const UserImgHolder = styled.div`
    height:30px;
    width:30px;
    margin: 5px 7px;
`;
const UserImg = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius:50%;
`;
const UserName = styled.span`
    font-weight:bold;
`;

interface IInternalCorrespondant {
    user: ISingleUser;
    photo: ISinglePhoto;
}

const InternalCorrespondant: FC<IInternalCorrespondant> = (props) => {
    return (
        <Wrapper>
            <UserImgHolder>
                <UserImg src={props.photo.url} alt='userImg' />
            </UserImgHolder>
            <UserName>{props.user.name}</UserName>
        </Wrapper>
    );
}
export default InternalCorrespondant;