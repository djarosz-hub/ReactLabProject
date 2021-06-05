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
const Select = styled.select`
    width:250px;
    height:29px;
`;
interface ITableSelect {
    editableNow: boolean;
    data: string[];
    selectId: string;
}
const TableSelect: FC<ITableSelect> = (props) => {
    const [textValue, setTextValue] = useState(props.data[0])
    const saveSelectOption = () => {
        const selectOption = document.getElementById(props.selectId) as HTMLOptionElement;
        console.log(selectOption)
        if (selectOption != null) {
            setTextValue(selectOption.value);
        }
    }
    return (
        <Wrapper>
            {props.editableNow ?
                <Select id={props.selectId} defaultValue={textValue} onChange={saveSelectOption}>
                    {props.data.map((el, index) => <option key={index} value={el}>{el}</option>)}
                </Select>:
                <TextHolder>{textValue}</TextHolder>}
        </Wrapper>
    );
}
export default TableSelect;