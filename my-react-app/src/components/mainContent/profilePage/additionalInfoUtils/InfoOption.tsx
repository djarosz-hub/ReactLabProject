import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:#0f5f77;
    background:#b5d5eb;
    border-radius:3px;
    font-size:15px;
    padding:5px 15px;
`;
interface IInfoOption {
    text: string;
}

const InfoOption: FC<IInfoOption> = (props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
}
export default InfoOption;