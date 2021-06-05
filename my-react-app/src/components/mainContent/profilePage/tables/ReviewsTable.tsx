import React, { FC } from 'react';
import styled from 'styled-components';
import TableFullRow from './TableFullRow';
import TableHeader from './TableHeader';

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
interface IReviewsTable {
    showFirm: boolean;
    editableNow: boolean;
}
const ReviewsTable: FC<IReviewsTable> = (props) => {
    return (
        <Wrapper>
            <TableHeader showFirm={props.showFirm} />
            <RowsWrapper>
                <TableFullRow showFirm={props.showFirm} editableNow={props.editableNow} />
                <TableFullRow showFirm={props.showFirm} editableNow={props.editableNow} />
                <TableFullRow showFirm={props.showFirm} editableNow={props.editableNow} />
            </RowsWrapper>
        </Wrapper>
    )
}
export default ReviewsTable;