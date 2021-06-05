import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    padding:10px;
    width:100%;
    box-sizing:border-box;
    border-bottom:1px solid #e4e3e3;
`;
const SingleHeader = styled.div`
    height:auto;
    width:100%;
    font-weight:bold;
`;

const TableHeader: FC = () => {
    return (
        <Wrapper>
            <SingleHeader>Year</SingleHeader>
            <SingleHeader>Cost center</SingleHeader>
            <SingleHeader>Total amount</SingleHeader>
            <SingleHeader>Law firm</SingleHeader>
        </Wrapper>
    );
}
export default TableHeader;