import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IUsersReducer } from '../../../../reducers/usersReducers';
import { IPostsReducer } from '../../../../reducers/postsReducers';
import { IPhotosReducer } from '../../../../reducers/photosReducers';
import PublicationInfo from './PublicationInfo';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
    text-decoration: none;
`;

const Background = styled.div`
    width:300px;
    height:300px;
    position:relative;
    color:white;
`;
const BgImage = styled.img`
    max-width:100%;
    max-height:100%;
`;

const Post = styled.div`
    padding:5px;
    /* overflow:scroll; */
    /* overflow-x:hidden; */
`;

const Details = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    box-sizing:border-box;
    padding:0 10px 20px 10px;
    position:absolute;
    bottom:0;
    left:0;
`;

const MainPhoto: FC = () => {
    const { usersList, postsList, photosList } = useSelector<IState, IUsersReducer & IPostsReducer & IPhotosReducer >(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts
    }));
    const defaultUserId = 0;
    return (
        <CustomLink to={"/publications"}>
            {usersList[0] && postsList[0] && photosList[0] && <Background>
                <BgImage src={photosList[1].url} />
                <Details>
                    <Post>{postsList[defaultUserId].title}</Post>
                    <PublicationInfo
                        author={usersList[defaultUserId].name}
                        iconUrl={photosList[defaultUserId].url}
                    />
                </Details>
            </Background>
            }
        </CustomLink>

    );
};
export default MainPhoto;