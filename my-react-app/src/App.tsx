import React, { FC } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./components/common/header/MainHeader";
import SidePanel from "./components/common/sidePanel/SidePanel";
import MainPage from "./components/mainContent/mainPage/MainPage";
import Entities from "./components/mainContent/entitiesPage/Entities";
import Workspaces from "./components/mainContent/workspacesPage/Workspaces";
import Profile from "./components/mainContent/profilePage/Profile";
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
`;
// const CustomLink = styled(Link)`

//     text-decoration: none;

// `;

const App: FC = () => {
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
