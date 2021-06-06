import React, { FC } from 'react';
import styled from 'styled-components';
import OptionField from './OptionField';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    color:#0e2777;
`;

const AddWrapper = styled.div`
    display:flex;
    align-items:center;
    width:120px;
`;
const IconHolder = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
`;
const AddRow: FC = () => {
    return (
        <Wrapper>
            <AddWrapper>
                <IconHolder>
                    <img src='icons/plus.png' alt='plusIcon' />
                </IconHolder>
                Add filter
            </AddWrapper>
            <OptionField text={'choose property'}/>
        </Wrapper>
    );
}
export default AddRow;