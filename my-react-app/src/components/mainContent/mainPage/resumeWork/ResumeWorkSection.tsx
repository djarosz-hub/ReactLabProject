import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FilterByTitle from './FilterByTitle';
import Followed from '../../../common/pagination/Followed';
import CommentsPagination from '../../../common/pagination/CommentsPagination';

//#region styled
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
//#endregion

const ResumeWorkSection: FC = () => {
    const [filterValue, setFitlerValue] = useState('');
    const [myPostsOnly, setMyPostsOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const filterHandler = (val: string) => {
        setFitlerValue(val);
        setCurrentPage(0);
    }
    const myPostsHandler = (val: boolean) => {
        setMyPostsOnly(val);
        setCurrentPage(0);
    }
    return (
        <Wrapper>
            <HeaderSection>
                <Title>
                    Resume your work
                </Title>
                <FilterByTitle
                    filterVal={(val: string) => filterHandler(val)} />
                <Followed
                    myPostsOnly={(val: boolean) => myPostsHandler(val)} 
                    header={myPostsOnly}/>
            </HeaderSection>
            <CommentsPagination
                filterValue={filterValue}
                myPostsOnly={myPostsOnly}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </Wrapper>
    );
};
export default ResumeWorkSection;