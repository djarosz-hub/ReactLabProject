import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOption from './InfoOption';

const Wrapper = styled.div`
    display:flex;
    width:auto;
    flex-wrap:wrap;
    margin-bottom:15px;
`;

const Select = styled.select`
    width:200px;
    margin:5px;
`;

interface IOptionsHolder {
    id: string;
    allOptions: string[];
    editable: boolean;
}
const OptionsHolder: FC<IOptionsHolder> = (props) => {

    const allOptions = props.allOptions;
    const [selectedOptions, setSelectedOptions] = useState<string[]>([allOptions[0]]); 
    const [availableOptions, setAvailableOptions] = useState<string[]>();

    useEffect(() => {
        setAvailableOptions(allOptions.filter(el => !selectedOptions.includes(el)));
    },[selectedOptions]);

    const AddOption = (id: string) => {
        const element = document.getElementById(id) as HTMLOptionElement;
        if (element == null || element.value === '')
            return;
        const newValues = selectedOptions;
        newValues.push(element.value);
        setSelectedOptions(newValues);
    }
    const deleteOption = (val: string) => {
        const values = selectedOptions;
        const newValues = values.filter(el => el !== val);
        setSelectedOptions(newValues);
    }
    return (
        <Wrapper>
            {selectedOptions.map((el, index) => <InfoOption key={index} text={el} editable={props.editable} delete={deleteOption} />)}
            {props.editable && <div><Select id={props.id}>
                {availableOptions?.map((el, index) => <option key={index} value={el}>{el}</option>)}
            </Select>
                <button onClick={() => AddOption(props.id)}>Add</button>
            </div>}
        </Wrapper>
    );
}
export default OptionsHolder;