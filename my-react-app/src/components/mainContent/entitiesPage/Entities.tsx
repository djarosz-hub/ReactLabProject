import React, { FC, useState } from 'react';
import styled from 'styled-components';
import PhotoPile from './PhotoPile';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers/index';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { ISinglePhoto } from '../../../entities/photos';
import FilterComponent from './filterDropDown/FilterComponent';
import Followed from '../../common/pagination/Followed';
import FilterByTitle from '../../common/pagination/FilterByTitle';
import SmallAllDiv from './SmallAllDiv';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MosaicSwitcher from './MosaicSwitcher';
import useDropdown from "react-dropdown-hook";

//#region styled components
type FullScreened = {
    isFullScreen: boolean;
}

const Wrapper = styled.div<FullScreened>`
    max-width: ${props => props.isFullScreen ? '100%' : '1200px'};
    position: ${props => props.isFullScreen ? 'absolute' : 'static'};
    top:0;
    left:0;
    z-index:9999;
    width:100%;
    height:100%;
    margin-top: ${props => props.isFullScreen ? '0' : '20px'};
    display:flex;
    background:white;
    box-shadow: ${props => props.isFullScreen ? '' : '0 2px 7px #c5c5c5'};
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
    padding:5px 5px;
    display:flex;
    align-items:center;
    :hover{
        background:#f1f1f1;
    }
    :active{
        background:#747474;
    }
`;
const ShareBtn = styled.button`
    color: #a3a3a3;
    font-size:14px;
    padding:5px 5px;
    display:flex;
    align-items:center;
    background:white;
    border:none;
    :hover{
        background:#f1f1f1;
    }
    :active{
        background:#747474;
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
    margin:0 5px;
`;
//#endregion

const Entities: FC = () => {
    const [mosaicView, setMosaicView] = useState(true);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos
    }));
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [filterValue, setFitlerValue] = useState('');
    const [myPostsOnly, setMyPostsOnly] = useState(false);
    const filterHandler = (val: string) => setFitlerValue(val);
    const myPostsHandler = (val: boolean) => setMyPostsOnly(val);
    const [sortValue, setSortValue] = useState(-1);
    const [isSorted, setIsSorted] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const filterPhotos = (photo: ISinglePhoto) => {
        const filter = filterValue.trim().toLowerCase();
        const titleIncludes: boolean = photo?.title.toLowerCase().includes(filter) ? true : false;
        return titleIncludes;
    }
    const filteredPhotos: ISinglePhoto[] = photosList && photosList?.filter(photo => filterPhotos(photo));

    const sortHandler = () => {
        setSortValue(-sortValue);
        setIsSorted(!isSorted);
    }
    function comparePhotos(a: ISinglePhoto, b: ISinglePhoto): number {
        if (a.title < b.title)
            return sortValue;
        if (a.title > b.title)
            return -sortValue;
        return 0;
    }
    const toggleFullScreen = () => {
        if (!isFullScreen) {
            setIsFullScreen(true);
            return;
        }
        setIsFullScreen(false);

    }
    return (
        <Wrapper isFullScreen={isFullScreen}>
            <SectionHolder>
                <TitleAndIconHolder>
                    <Title>Entities</Title>
                    <img src='icons/cog.png' alt='cogIcon' />
                </TitleAndIconHolder>
                <MosaicSwitcher isMosaic={mosaicView} switchView={() => setMosaicView(!mosaicView)} />
            </SectionHolder>
            <SectionHolder>
                <SideSectionHolder>
                    <SmallAllDiv />
                    <BulletHolder>
                        &bull;&bull;&bull;
                    </BulletHolder>
                    <SingleOption onClick={() => sortHandler()}>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        {isSorted ? 'Sorted (A-Z)' : 'Sorted (Z-A)'}
                    </SingleOption>
                    <div ref={wrapperRef}>
                        <SingleOption onClick={toggleDropdown}>
                            <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                            Filters
                        </SingleOption>
                        {dropdownOpen && <FilterComponent />}
                    </div>
                    <SingleOption onClick={() => toggleFullScreen()}>
                        <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                        {isFullScreen ?'Exit Fullscreen' : 'Fullscreen'}
                    </SingleOption>
                    <CopyToClipboard text={window.location.href}>
                        <ShareBtn>
                            <img src='icons/cog.png' alt='cogIcon' style={{ padding: '0 5px' }} />
                            Share
                        </ShareBtn>
                    </CopyToClipboard>
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
                {filteredPhotos.sort(comparePhotos).map((photo, index) =>
                    <PhotoPile key={index} photoUrl={photo?.url} title={photo?.title} isMosaic={mosaicView}></PhotoPile>
                )}
            </PilesWrapper>
        </Wrapper>
    );
}
export default Entities;