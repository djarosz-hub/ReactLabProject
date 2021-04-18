import React from "react";
import styled from "styled-components";
import LatestPublications from "./lastestPublications/LatestPublications";
import WorkspacesSection from "./workspaces/WorkspacesSection";
import ResumeWorkSection from "./resumeWork/ResumeWorkSection";

const Wrapper = styled.div`
    background-color:red;
    width:880px;
    margin-top:20px;
    height:auto;
    min-height:800px;
`;
export default class MainPage extends React.Component {
    render() {
        return (
            <Wrapper>
                <LatestPublications/>
                <WorkspacesSection/>
                <ResumeWorkSection/>
            </Wrapper>
        )
    }
}