import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IUsersReducer } from '../../../../reducers/usersReducers';
import { IPostsReducer } from '../../../../reducers/postsReducers';
import { IPhotosReducer } from '../../../../reducers/photosReducers';
import SmallSidePublication from './SmallSidePublication';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
    text-decoration: none;
    width:200px;
`;

const Wrapper = styled.div`
    width:580px;
    /* background:green; */
    padding:0 10px;
    box-sizing:border-box;
    color:white;
    display:flex;
    flex-direction:column;
`;

const TextHolder = styled.div`
    width:200px;
    height:30px;
    display:flex;
    align-items:center;
    color: ${props => props.color};
`;
const BigTextHolder = styled(TextHolder)`
    font-size:20px;
    font-weight:1000;
`;

const SidePublications: FC = () => {
    const { usersList, postsList, photosList } = useSelector<IState, IUsersReducer & IPostsReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts
    }));
    return (
        <Wrapper>
            <BigTextHolder
                color={"black"}
            >Latest Publications</BigTextHolder>
            {usersList &&
                postsList &&
                photosList &&
                postsList?.slice(0, 3).map((post) =>
                    <SmallSidePublication
                        key={post.id}
                        imgUrl={photosList?.[post.id]?.thumbnailUrl}
                        postBody={post.title}
                        userName={usersList?.[post.userId]?.name}
                        userPhotoUrl={photosList?.[post.id + 1]?.thumbnailUrl}
                    />)}
            <CustomLink to={"/publications"}>
                <TextHolder color={"blue"}>See more publications</TextHolder>
            </CustomLink>
        </Wrapper>
    );
};
export default SidePublications;