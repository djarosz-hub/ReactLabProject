import React, { FC } from 'react';
import styled from 'styled-components';
import TableInput from './TableInput';
import TableSelect from './TableSelect';
import { lawFirms, availableYears, costCenters } from '../tablesOptions';
import { Guid } from '../../../../../guid';

const Wrapper = styled.div`
    display:flex;
`;
interface ITableFullRow {
    editableNow: boolean;
}
const TableFullRow: FC<ITableFullRow> = (props) => {
    return (
        <Wrapper>
            <TableSelect editableNow={props.editableNow} data={availableYears} selectId={Guid.newGuid()} />
            <TableSelect editableNow={props.editableNow} data={costCenters} selectId={Guid.newGuid()} />
            <TableInput editableNow={props.editableNow} />
            <TableSelect editableNow={props.editableNow} data={lawFirms} selectId={Guid.newGuid()} />
        </Wrapper>
    );
}
export default TableFullRow;