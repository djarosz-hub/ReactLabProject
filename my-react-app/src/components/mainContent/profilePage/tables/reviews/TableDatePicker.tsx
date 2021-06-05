import React, { FC, useState } from 'react';
import styled from 'styled-components';
import DatePicker, {setDefaultLocale, getDefaultLocale }from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
`;
const StyledDatePicker = styled(DatePicker)`
    height:29px;
    width:180px;
    box-sizing:border-box;
`;
const TextHolder = styled.div`
    width:auto;
    height:29px;
    box-sizing:border-box;
    padding:5px 0;
`;
interface ITableDatePicker {
    editableNow: boolean;
}
const TableDatePicker: FC<ITableDatePicker> = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const setDate = (date: any) => {
        if (date != null)
            setStartDate(date);
    }
    return (
        <Wrapper>
            {props.editableNow ?
            <TextHolder>{startDate.toLocaleDateString()}</TextHolder>:
            <StyledDatePicker selected={startDate} onChange={(date) => setDate(date)} />}
        </Wrapper>
    );
}
export default TableDatePicker;