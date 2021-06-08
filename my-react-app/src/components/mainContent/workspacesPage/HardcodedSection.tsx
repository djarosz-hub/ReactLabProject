import React, { FC } from 'react';
import styled from 'styled-components';
import SingleHardcodedTile, { ISingleHardcodedTile } from './SingleHardcodedTile';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1200px;
    width:100%;
    box-sizing:border-box;
    background:#f1f1f1;
    border-radius:4px;
    border:1px solid #bdbdbd;
    padding:15px 20px;
    margin-bottom:20px;
`;
const TextHolder = styled.div`
    width:100%;
    display:flex;
    box-sizing:border-box;
    font-weight:bold;
    color:#8f8f8f;
    justify-content:space-between;
    padding-bottom:15px;
`;
const TilesHolder = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const HardcodedSection: FC = () => {
    const tiles: ISingleHardcodedTile[] = [
        { iconName: 'entities', title: 'Explore your entities', text: 'Take a few minutes to look at the most important elements and specificities of your entities.' },
        { iconName: 'administration', title: 'Structure the ownership', text: 'Get a clear view of the ownership by looking at the relations between individuals and entities.' },
        { iconName: 'bell', title: 'Define the calendar', text: 'Prepare future events by creating detailed plans around the life of your entity.' }
    ];
    return (
        <Wrapper>
            <TextHolder>
                <span>Start working on corporate matters</span>
                <span>Hide</span>
            </TextHolder>
            <TilesHolder>
                {tiles.map((tile, index) => <SingleHardcodedTile key={index} iconName={tile.iconName} title={tile.title} text={tile.text} />)}
            </TilesHolder>
        </Wrapper>
    );
}
export default HardcodedSection;