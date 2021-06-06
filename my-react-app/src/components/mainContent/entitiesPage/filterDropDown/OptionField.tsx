import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin:0 10px;
`;
const IconHolder = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 15px;
`;

interface IOptionField {
    text: string;
}

const OptionField: FC<IOptionField> = (props) => {
    return (
        <Wrapper>
            {props.text}
            <IconHolder>
                <img src='icons/arrow-down.png' alt='arrowDownIcon'/>
            </IconHolder>
        </Wrapper>
    );
}
export default OptionField;