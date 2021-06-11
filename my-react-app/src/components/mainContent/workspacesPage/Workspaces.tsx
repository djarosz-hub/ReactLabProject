import React, { FC } from 'react';
import styled from 'styled-components';
import WorkspaceHeader from './WorkspaceHeader';
import HardcodedSection from './HardcodedSection';
import LatestUpdates from './LatestUpdates';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    margin-top:20px;
`;
const Workspaces: FC = (props) => {
    const location: any = useLocation();
    return (
        <Wrapper>
            <WorkspaceHeader iconName={location?.state ? location?.state?.icon : 'icons/entities.png'} title={location?.state ? location?.state?.title : 'Custom workspace'} />
            <HardcodedSection />
            <LatestUpdates />
        </Wrapper>
    );
}
export default Workspaces;