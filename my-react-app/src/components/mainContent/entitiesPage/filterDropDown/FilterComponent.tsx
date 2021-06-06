import React, { FC } from 'react';
import styled from 'styled-components';
import DisabledField from './DisabledField';
import OptionField from './OptionField';
import DeleteRow from './DeleteRow';
import AddRow from './AddRow';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px 15px 20px;
    background:white;
    box-shadow:0 2px 3px #d8d8d8;
    border-radius:3px;
`;
const Header = styled.div`
    color:#c2c1c1;
    font-size:14px;
    margin-bottom:10px;
`;
const FilterTableRow = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
`;

const FilterComponent: FC = () => {
    return (
        <Wrapper>
            <Header>Rows are filtered by the following conditions starting from the top.</Header>
            <FilterTableRow>
                <DeleteRow text={'Where'} />
                <OptionField text={'Company'} />
                <OptionField text={'Contains'} />
                <DisabledField text={'Type...'} />
            </FilterTableRow>
            <FilterTableRow>
                <DeleteRow text={'Where'} />
                <OptionField text={'Status'} />
                <OptionField text={'Is'} />
                <DisabledField text={'Type...'} />
                <OptionField text={'In'} />
                <DisabledField text={'Entity...'} />
            </FilterTableRow>
            <FilterTableRow>
                <DeleteRow text={'And'} />
                <OptionField text={'Status'} />
                <OptionField text={'Ends before'} />
                <DisabledField text={'Date'} />
                <OptionField text={'In'} />
                <DisabledField text={'Entity...'} />
            </FilterTableRow>
            <FilterTableRow>
                <AddRow />
            </FilterTableRow>
        </Wrapper>
    );
}
export default FilterComponent;