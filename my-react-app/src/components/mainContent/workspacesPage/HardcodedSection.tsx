import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    background:#f1f1f1;
    border-radius:4px;
    border:1px solid #bdbdbd;
    padding:15px 20px;
`;
const TextHolder = styled.div`
    width:100%;
    display:flex;
    box-sizing:border-box;
    font-weight:bold;
    color:#8f8f8f;
    justify-content:space-between;
`;

const HardcodedSection:FC = () =>{
    return(
        <Wrapper>
            <TextHolder>
                <span>Start working on corporate matters</span>
                <span>Hide</span>
            </TextHolder>
        </Wrapper>
    );
}
export default HardcodedSection;