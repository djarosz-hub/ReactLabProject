import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`;
const IconHolder = styled.div`
    width:20px;
    height:20px;
    padding:5px;
    `;
const Icon = styled.img`
    border-radius:50%;
    max-width:100%;
    max-height:100%;
`;
const PostDate = styled.div`
    padding:5px;
`;
const Author = styled.div`
    padding:5px;
`;

export interface IPublicationInfo{
    iconUrl:string;
    author:string;
}
const PublicationInfo: FC<IPublicationInfo> = (props) => {

    const date = (new Date()).toLocaleDateString();

    return (
        <Wrapper>
            <PostDate>{date}</PostDate>
            <IconHolder>
                <Icon src={props.iconUrl} alt={props.author}/>
            </IconHolder>
            <Author>{props.author}</Author>
        </Wrapper>

    );
};
export default PublicationInfo;