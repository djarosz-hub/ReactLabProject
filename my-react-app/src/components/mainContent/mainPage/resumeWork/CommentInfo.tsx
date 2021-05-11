import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding: 5px 0;
    font-size:12px;
    margin-left:5px;
`;

const IconHolder = styled.div`
    border-radius:50%;
    overflow:hidden;
    width:25px;
    height:25px;
    margin-right:10px;
`;
const Icon = styled.img`
    max-width:100%;
    max-height:100%;
    margin-right:10px;
`;
const Text = styled.div`
    margin-right:10px;
`;

interface ICommentInfo {
    photoUrl: string;
    userName: string;
}
const CommentInfo: FC<ICommentInfo> = (props) => {
    return (
        <Wrapper>
            <IconHolder>
                <Icon src={props.photoUrl} alt={'user photo'} />
            </IconHolder>
            <Text>{props.userName}</Text>
            <Text>&bull;</Text>
            <Icon src={'../../../../icons/cog.png'} alt={'icon'} />
            <Text>Client contract</Text>
            <Text>&bull;</Text>
            <Text>
                Last updated {(Math.random() * 10).toFixed()} days ago by {props.userName}
            </Text>
        </Wrapper>
    );
};

export default CommentInfo;


