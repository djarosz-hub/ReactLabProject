import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./components/common/header/MainHeader";
import SidePanel from "./components/common/sidePanel/SidePanel";
import MainPage from "./components/mainContent/mainPage/MainPage";
import Entities from "./components/mainContent/entitiesPage/Entities";
import Workspaces from "./components/mainContent/workspacesPage/Workspaces";
import Profile from "./components/mainContent/profilePage/Profile";
import {useDispatch} from 'react-redux';
import {getUsers} from './actions/usersActions';
import {getPhotos} from './actions/photosAction';
import {getComments} from './actions/commentsAction';
import {getPosts} from './actions/postsAction';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetComments = ReturnType<typeof getComments>;
type GetPosts = ReturnType<typeof getPosts>;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    width:1200px;
    display: flex;
    background-color:#f8f8f8;
`;

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetComments>(getComments());
        dispatch<GetPosts>(getPosts());
    });

    return (
        <Router>
            <Wrapper>
                <MainHeader />
                <Content>
                    <SidePanel />
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/workspaces">
                            <Workspaces />
                        </Route>
                        <Route path="/entities">
                            <Entities />
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Router>
    );
};

export default App;
