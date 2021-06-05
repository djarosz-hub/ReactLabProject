import React, { FC } from 'react';
import styled from 'styled-components';
import TableDatePicker from './TableDatePicker';
import TableInput from './TableInput';
import TableSelect from './TableSelect';
import { names, locations, entities, expertise, firms } from '../tablesOptions';
import { Guid } from '../../../../../guid';


const Wrapper = styled.div`
    display:flex;
`;
const DivPlaceHolder = styled.div`
    width:100%;
    visibility:hidden;
`;
interface ITableFullRow {
    showFirm: boolean;
    editableNow: boolean;
}
const TableFullRow: FC<ITableFullRow> = (props) => {
    return (
        <Wrapper>
            <TableInput editableNow={props.editableNow} data={names} />
            <TableSelect editableNow={props.editableNow} data={entities} selectId={Guid.newGuid()} />
            <TableSelect editableNow={props.editableNow} data={locations} selectId={Guid.newGuid()} />
            <TableSelect editableNow={props.editableNow} data={expertise} selectId={Guid.newGuid()} />
            <TableDatePicker editableNow={props.editableNow} />
            {props.showFirm ?
                <TableSelect editableNow={props.editableNow} data={firms} selectId={Guid.newGuid()} /> :
                <DivPlaceHolder />}
        </Wrapper>
    );
}
export default TableFullRow;