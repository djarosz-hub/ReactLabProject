import React, { FC } from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableFullRow from './TableFullRow';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    width:100%;
    box-sizing:border-box;
`;
const RowsWrapper = styled.div`
    padding:10px;
`;
interface IFeesTable {
    editableNow: boolean;
}
const FeesTable: FC<IFeesTable> = (props) => {
    return (
        <Wrapper>
            <TableHeader/>
            <RowsWrapper>
                <TableFullRow editableNow={props.editableNow} />
                <TableFullRow editableNow={props.editableNow} />
                <TableFullRow editableNow={props.editableNow} />
            </RowsWrapper>
        </Wrapper>
    )
}
export default FeesTable;