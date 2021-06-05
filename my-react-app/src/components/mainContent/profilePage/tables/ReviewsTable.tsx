import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px;
    width:100%;
    box-sizing:border-box;
    border-bottom:1px solid #e4e3e3;
    position:relative;
`;

interface IReviewsTable {
    showFirm: boolean;
}
const ReviewsTable: FC<IReviewsTable> = (props) => {
    return (
        <>
        </>
    )
}
export default ReviewsTable;