import React, { FC, useState } from 'react';
import styled from 'styled-components';
import LatestUpdateTile, { ILatestUpdateTile } from './LatestUpdateTile';
import Followed from '../../common/pagination/Followed';
import FilterByTitle from '../../common/pagination/FilterByTitle';
import CommentsPagination from '../../common/pagination/CommentsPagination';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    width:100%;
`;
const TopBar = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    margin-bottom:5px;
`;
const Title = styled.div`
    font-size:20px;
    font-weight:bold;
    color:#200c58;
    min-width:200px;
`;
const FilterSection = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;

const TilesHolder = styled.div`
    width:100%;
    display:flex;
    padding:10px 0;
    margin-bottom:10px;
`;
const LatestUpdates: FC = () => {
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
    const tiles: ILatestUpdateTile[] = [
        { bgColor: `#e7e7e7`, textColor: `#171053`, text: 'All', containsIcon: false, iconName: '' },
        { bgColor: `#bfe6c2`, textColor: `#257533`, text: 'SAS', containsIcon: true, iconName: 'entities' },
        { bgColor: `#c1dde0`, textColor: `#3e809e`, text: 'SARL', containsIcon: true, iconName: 'entities' },
        { bgColor: `#f0e1b8`, textColor: `#b6702f`, text: 'Secondary business', containsIcon: true, iconName: 'entities' },
        { bgColor: `#a3a3a3`, textColor: `#303030`, text: 'Communities', containsIcon: true, iconName: 'entities' },
        { bgColor: `#d1d1d1`, textColor: `#5c5c5c`, text: 'POA', containsIcon: true, iconName: 'entities' },
        { bgColor: `#ffffff`, textColor: `#a3a3a3`, text: 'Survey', containsIcon: true, iconName: 'entities' },
        { bgColor: `#ffffff`, textColor: `#a3a3a3`, text: '...', containsIcon: false, iconName: '' },
    ]
    return (
        <Wrapper>
            <TopBar>
                <Title>Latest updates</Title>
                <FilterSection>
                    <FilterByTitle
                        filterVal={(val: string) => filterHandler(val)} />
                    <Followed
                        myPostsOnly={(val: boolean) => myPostsHandler(val)}
                        header={myPostsOnly} />
                </FilterSection>
            </TopBar>
            <TilesHolder>
                {tiles.map((tile, index) => <LatestUpdateTile key={index} bgColor={tile.bgColor} textColor={tile.textColor} text={tile.text} containsIcon={tile.containsIcon} iconName={tile.iconName} />)}
            </TilesHolder>
            <CommentsPagination
                filterValue={filterValue}
                myPostsOnly={myPostsOnly}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </Wrapper>
    );
}
export default LatestUpdates;