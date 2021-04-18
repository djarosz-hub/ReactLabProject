import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:150px;
    border-radius:3px;
    box-shadow: 0px 2px 2px #c5c5c5;
    background-color:yellow;
    margin-right:10px;
    /*  */
    height:120px;
    
`;

const SingleWorkspace: FC = () => {
    return (
        <Wrapper>
            kafelek
        </Wrapper>
    );
};
export default SingleWorkspace;