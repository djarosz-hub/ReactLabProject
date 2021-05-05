import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photosReducers';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-bottom:1px #e0dfdf solid;
`;

const ProfileImg = styled.img`
    width:130px;
    height:130px;
    border-radius:50%;
    margin-top:10px;
`;
const Name = styled.div`
    margin: 10px 0;
    color: #1e3e6e;
    font-size:20px;
`;
const Description = styled.span`
    color:#cccccc;
    font-size:14px;
    margin-bottom:10px;
`;

interface IPictureSection{
    name:string;
    picId:string;
    jobTitle:string;
    company:string;
}
const PictureSection: FC<IPictureSection> = (props) => {
    const {photosList} = useSelector<IState, IPhotosReducer>(globalState=>({
        ...globalState.photos
    }));
    return (
        <Wrapper>
            {photosList[0] && <ProfileImg src={photosList[0].url} alt={"userPhoto"}/>}
            <Name>
                {props.name}
            </Name>
            <Description>
                {props.jobTitle} - {props.company}
            </Description>
        </Wrapper>
    );
};
export default PictureSection;