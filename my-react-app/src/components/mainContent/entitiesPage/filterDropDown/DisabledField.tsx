import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    width:120px;
    border-radius:3px;
    background:#ececec;
    color:#9e9e9e;
    margin: 0 10px;
`;
interface IDisabledField {
    text: string;
}
const DisabledField: FC<IDisabledField> = (props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
}
export default DisabledField;