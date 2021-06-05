import React, { FC } from 'react';
import styled from 'styled-components';
import TableDatePicker from './TableDatePicker';
import TableInput from './TableInput';
import TableSelect from './TableSelect';
import { names, locations, entities, expertise, firms } from './tablesOptions';
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
            <TableInput editableNow={props.editableNow} data={names}/>
            <TableSelect editableNow={props.editableNow} data={entities} selectId={'entitiesSel'}/>
            <TableSelect editableNow={props.editableNow} data={locations}selectId={'locationsSel'}/>
            <TableSelect editableNow={props.editableNow} data={expertise} selectId={'expertiseSel'}/>
            <TableDatePicker editableNow={props.editableNow}/>
            {props.showFirm ?
                <TableSelect editableNow={props.editableNow} data={firms} selectId={'firmsSel'}/> :
                <DivPlaceHolder />}
        </Wrapper>
    );
}
export default TableFullRow;