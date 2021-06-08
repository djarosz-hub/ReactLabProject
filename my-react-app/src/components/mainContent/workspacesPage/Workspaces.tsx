import React, { FC } from 'react';
import styled from 'styled-components';
import WorkspaceHeader from './WorkspaceHeader';
import HardcodedSection from './HardcodedSection';
import LatestUpdates from './LatestUpdates';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    margin-top:20px;
`;
const Workspaces:FC = (props) =>{
    return(
        <Wrapper>
            <WorkspaceHeader iconName={'entities'} title={'tytul'}/>
            <HardcodedSection/>
            <LatestUpdates/>
        </Wrapper>
    );
}
export default Workspaces;