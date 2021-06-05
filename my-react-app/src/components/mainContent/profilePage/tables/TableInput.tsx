import React, { FC, useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
`;
const TextHolder = styled.div`
    width:auto;
    height:29px;
    box-sizing:border-box;
    max-width:180px;
    overflow:hidden;
    white-space:nowrap;
    padding:5px 0;
`;
const EditableInput = styled.input`
    width:176px;
    padding:5px 0;
`;
interface ITableInput {
    editableNow: boolean;
    data: string[];
}
const TableInput: FC<ITableInput> = (props) => {
    const [inputValue, setInputValue] = useState(props.data[0])
    return (
        <Wrapper>
            {props.editableNow ?
                <TextHolder>{inputValue}</TextHolder> :
                <EditableInput value={inputValue} placeholder={'--'} onChange={(e) => setInputValue(e.target.value)} />}
        </Wrapper>
    );
}
export default TableInput;