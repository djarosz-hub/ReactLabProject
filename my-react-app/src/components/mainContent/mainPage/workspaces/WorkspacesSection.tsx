import React, { FC } from 'react';
import styled from 'styled-components';
import SingleWorkspace from './SingleWorkspace';

const Wrapper = styled.div`
    width:auto;
    margin-bottom:20px;
`;
const Header = styled.div`
    font-size:18px;
    padding-left:15px;
    margin-bottom:10px;
`;
const Container = styled.div`
    display:flex;
`;
const WorkspacesSection: FC = () => {
    return (
        <Wrapper>
            <Header>Workspaces</Header>
            <Container>
                <SingleWorkspace />
                <SingleWorkspace />
                <SingleWorkspace />
                <SingleWorkspace />
            </Container>
        </Wrapper>
    );
};
export default WorkspacesSection;