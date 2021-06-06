import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    margin-top:20px;
    background:white;
`;
const LatestUpdates:FC = (props) =>{
    return(
        <Wrapper>
            latest
        </Wrapper>
    );
}
export default LatestUpdates;