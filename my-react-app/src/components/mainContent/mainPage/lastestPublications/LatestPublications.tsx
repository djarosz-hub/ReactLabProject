import React, { FC } from 'react';
import styled from 'styled-components';
import MainPhoto from './MainPhoto';
import SidePublications from './SidePublications';

const Wrapper = styled.div`
    border-radius:4px;
    box-shadow: 0px 2px 7px #c5c5c5;
    margin-bottom:20px;
    display:flex;
    background:white;
    overflow:hidden;
`;

const LatestPublications: FC = () => {
    return (
            <Wrapper>
                <MainPhoto />
                <SidePublications />
            </Wrapper>
    );
};
export default LatestPublications;