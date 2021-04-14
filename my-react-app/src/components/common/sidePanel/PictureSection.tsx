import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-bottom:1px #e0dfdf solid;
`;

const ProfileImg = styled.img.attrs({
    src: "../../../trollface.png",
    alt: "userPhoto",
})`
    width:130px;
    height:130px;
    border-radius:50%;
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
    return (
        <Wrapper>
            <ProfileImg/>
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