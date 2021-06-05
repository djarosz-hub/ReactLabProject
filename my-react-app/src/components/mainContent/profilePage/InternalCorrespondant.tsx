import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IconHolder } from './Profile';
import { ISingleUser } from '../../../entities/users';
import { ISinglePhoto } from '../../../entities/photos';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    background:#f5f5f5;
    margin:1px 0;
`;
const UserWrapper = styled.div`
    display:flex;
    width:420px;
    align-items:center;
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
const InfoWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
`;
const InfoHolder = styled.div`
    display:flex;
    align-items:center;
    margin-right:20px;
`;
const DeleteBtn = styled.button`
    width:60px;
    height:20px;
`;
interface IInternalCorrespondant {
    user: ISingleUser;
    photo: ISinglePhoto;
    editableNow: boolean;
    deleteInternalCorr(userName: string): void;
}

const InternalCorrespondant: FC<IInternalCorrespondant> = (props) => {
    return (
        <Wrapper>
            <UserWrapper>
                <UserImgHolder>
                    <UserImg src={props.photo?.url} alt='userImg' />
                </UserImgHolder>
                <UserName>{props.user?.name}</UserName>
            </UserWrapper>
            <InfoWrapper>
                {props.editableNow &&
                    <DeleteBtn onClick={() => props.deleteInternalCorr(props.user.name)}>Delete</DeleteBtn>
                }
                <InfoHolder>
                    <IconHolder>
                        <img src='../../../icons/comments.png' alt='comIcon' />
                    </IconHolder>
                Message
            </InfoHolder>
                <InfoHolder>
                    <IconHolder>
                        <img src='../../../icons/user-plus.png' alt='userPlusIcon' />
                    </IconHolder>
                Profile
            </InfoHolder>
            </InfoWrapper>
        </Wrapper >
    );
}
export default InternalCorrespondant;