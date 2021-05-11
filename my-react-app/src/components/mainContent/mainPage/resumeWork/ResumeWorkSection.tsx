import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FilterByTitle from './FilterByTitle';
import Followed from './Followed';
import CommentsPagination from '../../../common/CommentsPagination';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

const HeaderSection = styled.div`
    display:flex;
    align-items:center;
    padding:5px 0;
`;
const Title = styled.div`
    font-size:18px;
    padding-left:15px;
    font-weight:1000;
    width:200px;
`;

const ResumeWorkSection: FC = () => {
    const [filterValue, setFitlerValue] = useState('');
    const filterHandler = (val: string) => {
        setFitlerValue(val);
    }
    return (
        <Wrapper>
            <HeaderSection>
                <Title>
                    Resume your work
                </Title>
                <FilterByTitle
                    filterVal={(val: string) => filterHandler(val)} />
                <Followed />
            </HeaderSection>
            <CommentsPagination
                filterValue={filterValue}
            />
        </Wrapper>
    );
};
export default ResumeWorkSection;