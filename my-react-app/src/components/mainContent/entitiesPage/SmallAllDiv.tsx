import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:80px;
    align-items:center;
    font-weight:bold;
    color:#21438d;
    background:#a3c0ff;
    margin:0 10px;
    padding:5px;
    border-radius:5px;
    box-shadow:0 2px 3px #c5c5c5;
    justify-content:space-evenly;
`;
const Circle = styled.div`
    position:relative;
    background:#a3c0ff;
    border-radius:50%;
    width:16px;
    height:16px;
    border: 2px solid #1a4381;
`;
const SmallCircle = styled.div`
    position:absolute;
    background:#1a4381;
    width:6px;
    height:6px;
    border-radius:50%;
    top: calc(50% - 3px);
    left: calc(50% - 3px);
`;
const SmallAllDiv: FC = () => {
    return (
        <Wrapper>
            <Circle>
                <SmallCircle />
            </Circle>
            All
            <img src='icons/arrow-down.png' alt='arrowIcon' />
        </Wrapper>
    );
}
export default SmallAllDiv;