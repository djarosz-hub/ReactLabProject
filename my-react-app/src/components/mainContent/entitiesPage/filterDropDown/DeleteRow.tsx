import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
const RotatedIcon = styled.img`
    transform:rotate(45deg) scale(1.2);
`;
interface IDeleteRow {
    text: string;
}
const DeleteRow: FC<IDeleteRow> = (props) => {
    return (
        <Wrapper>
            <IconHolder>
                <RotatedIcon src='icons/plus.png' alt='plusIcon' />
            </IconHolder>
            {props.text}
        </Wrapper>
    );
}
export default DeleteRow;