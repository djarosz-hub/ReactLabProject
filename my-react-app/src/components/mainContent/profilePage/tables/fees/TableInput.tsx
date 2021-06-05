import React, { FC, useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
`;
const TextHolder = styled.div`
    width:auto;
    height:29px;
    box-sizing:border-box;
    max-width:250px;
    overflow:hidden;
    white-space:nowrap;
    padding:5px 0;
`;
const EditableInput = styled.input`
    width:246px;
    padding:5px 0;
`;
interface ITableInput {
    editableNow: boolean;
}
const TableInput: FC<ITableInput> = (props) => {
    const [inputValue, setInputValue] = useState(Math.ceil(Math.random()*10000))
    const costEditHandler = (val: string) => {
        if (isNaN(+val))
            return alert(`Total amount must be number`);
        else
            setInputValue(+val);
    }
    return (
        <Wrapper>
            {props.editableNow ?
                <EditableInput value={inputValue} placeholder={'--'} onChange={(e) => costEditHandler(e.target.value)} /> :
                <TextHolder>{inputValue}&euro;</TextHolder>}
        </Wrapper>
    );
}
export default TableInput;