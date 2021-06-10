import React, { FC, useState } from 'react';
import styled from 'styled-components';
import PhotoPile from './PhotoPile';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers/index';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import FilterComponent from './filterDropDown/FilterComponent';
import Followed from '../../common/pagination/Followed';
import FilterByTitle from '../../common/pagination/FilterByTitle';
import SmallAllDiv from './SmallAllDiv';

import MosaicSwitcher from './MosaicSwitcher';

const Wrapper = styled.div`
    max-width:1200px;
    width:100%;
    margin-top:20px;
    display:flex;
    background:white;
    box-shadow: 0 2px 7px #c5c5c5;
    border-radius:5px;
    flex-direction:column;
`;
const PilesWrapper = styled.div`
    margin-top:10px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
const SectionHolder = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:5px;
`;
const SideSectionHolder = styled(SectionHolder)`
    justify-content:center;
`;
const SingleOption = styled.div`
    color: #a3a3a3;
    font-size:14px;
    padding:5px 10px;
    display:flex;
    align-items:center;
    :hover{
        background:#c5c5c5;
    }
`;
const TitleAndIconHolder = styled.div`
    display:flex;
    align-items:center;
`;
const Title = styled.div`
    color:#0f0869;
    font-size:18px;
    font-weight:bold;
    padding:0 10px;
`;
const BulletHolder = styled.div`
    font-weight:bold;
    font-size:25px;
`;

const Entities: FC = () => {
    const [mosaicView, setMosaicView] = useState(true);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos
    }));
    const [filterValue, setFitlerValue] = useState('');
    const [myPostsOnly, setMyPostsOnly] = useState(false);
    const filterHandler = (val: string) => setFitlerValue(val);
    const myPostsHandler = (val: boolean) => setMyPostsOnly(val);

    return (
        <Wrapper>
            <SectionHolder>
                <TitleAndIconHolder>
                    <Title>Entities</Title>
                    <img src='icons/cog.png' alt='cogIcon' />
                </TitleAndIconHolder>
                <MosaicSwitcher isMosaic={mosaicView} switchView={() => setMosaicView(!mosaicView)} />
            </SectionHolder>
            <SectionHolder>
                <SideSectionHolder>
                    <SmallAllDiv/>
                    <BulletHolder>
                        &bull;&bull;&bull;
                    </BulletHolder>
                    <SingleOption>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        Sort</SingleOption>
                    <SingleOption>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        Filters</SingleOption>
                    <SingleOption>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        Fullscreen</SingleOption>
                    <SingleOption>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        Share</SingleOption>
                </SideSectionHolder>
                <SideSectionHolder>
                    <FilterByTitle
                        filterVal={(val: string) => filterHandler(val)} />
                    <Followed
                        myPostsOnly={(val: boolean) => myPostsHandler(val)}
                        header={myPostsOnly} />
                </SideSectionHolder>
            </SectionHolder>
            <PilesWrapper>
                {photosList.length && photosList.map((photo, index) =>
                    <PhotoPile key={index} photoUrl={photo?.url} title={photo?.title} isMosaic={mosaicView}></PhotoPile>
                )}
            </PilesWrapper>
        </Wrapper>
    );
}
export default Entities;