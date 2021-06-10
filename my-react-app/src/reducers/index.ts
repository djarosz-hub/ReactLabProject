import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';
import comments, { ICommentsReducer } from './commentsReducers';
import posts, { IPostsReducer } from './postsReducers';
import workspaceInfo, { IWorkspacesInfoReducer } from './workspacesInfoReducers';

export default combineReducers({
    users,
    photos,
    comments,
    posts,
    workspaceInfo
})

export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer,
    comments: ICommentsReducer,
    posts: IPostsReducer,
    workspaceInfo: IWorkspacesInfoReducer
}