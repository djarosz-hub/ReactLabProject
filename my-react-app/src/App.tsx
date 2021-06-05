import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./components/common/header/MainHeader";
import SidePanel from "./components/common/sidePanel/SidePanel";
import MainPage from "./components/mainContent/mainPage/MainPage";
import Entities from "./components/mainContent/entitiesPage/Entities";
import Workspaces from "./components/mainContent/workspacesPage/Workspaces";
import Profile from "./components/mainContent/profilePage/Profile";
import NoMatch from "./components/mainContent/NoMatch";
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/usersActions';
import { getPhotos } from './actions/photosAction';
import { getComments } from './actions/commentsAction';
import { getPosts } from './actions/postsAction';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetComments = ReturnType<typeof getComments>;
type GetPosts = ReturnType<typeof getPosts>;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const ContentWrapper = styled.div`
    display:flex;
    background-color:#f8f8f8;
`;
const Content = styled.div`
    width:100%;
    display: flex;
    min-height:900px;
    justify-content:center;
`;

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetComments>(getComments());
        dispatch<GetPosts>(getPosts());
    });

    return (
        <Router>
            <Wrapper>
                <MainHeader />
                <ContentWrapper>
                    <SidePanel />
                    <Content>
                        <Switch>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                            <Route exact path="/workspaces">
                                <Workspaces />
                            </Route>
                            <Route exact path="/entities">
                                <Entities />
                            </Route>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route exact path="*">
                                <NoMatch />
                            </Route>
                        </Switch>
                    </Content>
                </ContentWrapper>
            </Wrapper>
        </Router>
    );
};

export default App;
