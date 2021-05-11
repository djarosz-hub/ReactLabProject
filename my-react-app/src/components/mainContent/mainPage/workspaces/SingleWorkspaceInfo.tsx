import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CustomLink = styled(Link)`
    text-decoration: none;
    color:black;
`;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`;
const Icon = styled.img`
    margin-right:10px;
`;
const Text = styled.div`
    margin-right:10px;
`;

interface ISingleWorkspaceInfo {
    iconUrl: string;
    title: string;
}
const SingleWorkspaceInfo: FC<ISingleWorkspaceInfo> = (props) => {
    return (
        <Wrapper>
            <Icon src={props.iconUrl} alt={props.title} />
            <Text>{props.title}</Text>
            <Text>&bull;</Text>
            <Icon src={'../../../../icons/user-plus.png'} alt={props.title} />
            <Text>
                {(Math.random() * 100).toFixed()} Users
            </Text>
        </Wrapper>
    );
}
export default SingleWorkspaceInfo;