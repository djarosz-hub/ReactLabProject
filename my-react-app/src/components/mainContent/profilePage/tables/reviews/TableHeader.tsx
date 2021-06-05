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
const DivPlaceHolder = styled(SingleHeader)`
    visibility:hidden;
`;
interface ITableHeader {
    showFirm: boolean;
}
const TableHeader: FC<ITableHeader> = (props) => {
    return (
        <Wrapper>
            <SingleHeader>Name</SingleHeader>
            <SingleHeader>Entity</SingleHeader>
            <SingleHeader>Location</SingleHeader>
            <SingleHeader>Expertise</SingleHeader>
            <SingleHeader>Date</SingleHeader>
            {props.showFirm ?
            <SingleHeader>Firm</SingleHeader>:
            <DivPlaceHolder/>}
        </Wrapper>
    );
}
export default TableHeader;