import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOption from './InfoOption';

const Wrapper = styled.div`
    display:flex;
    width:600px;
    flex-wrap:wrap;
    margin-bottom:15px;
`;
interface IOptionsHolder {
    id: string;
    selectedOptions: string[];
    allOptions: string[];
    editable: boolean;
    setValues(values: string[]): void;
}
const Select = styled.select`
    width:200px;
    margin:5px;
`;
const OptionsHolder: FC<IOptionsHolder> = (props) => {

    const [availableOptions, setAvailableOptions] = useState<string[]>();
    useEffect(() => {
        // console.log('a', props.selectedOptions)
        setAvailableOptions(props.allOptions.filter(el => !props.selectedOptions.includes(el)));
        // console.log(props.selectedOptions)
    }, [props])

    const AddOption = (id: string) => {
        const element = document.getElementById(id) as HTMLOptionElement;
        if (element == null || element.value === '')
            return;
        const newValues = props.selectedOptions;
        newValues.push(element.value);
        // console.log(newValues)
        props.setValues(newValues);
    }
    const deleteOption = (val: string) => {
        const values = props.selectedOptions;
        const newValues = values.filter(el => el !== val);
        props.setValues(newValues);
    }
    return (
        <Wrapper>
            {/* {console.log(props.selectedOptions)} */}
            {props.selectedOptions.map((el, index) => <InfoOption key={index} text={el} editable={props.editable} delete={deleteOption} />)}
            {props.editable && <div><Select id={props.id}>
                {availableOptions?.map((el, index) => <option key={index} value={el}>{el}</option>)}
            </Select>
                <button onClick={() => AddOption(props.id)}>Add</button>
            </div>}
        </Wrapper>
    );
}
export default OptionsHolder;