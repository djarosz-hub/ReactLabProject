import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    border-radius:4px;
    overflow:hidden;
    border:1px solid #c5c5c5;
    align-items:center;
    height:30px;
    margin:10px;
`;

type ViewDiv = {
    isSelected: boolean;
}
const OptionHolder = styled.div<ViewDiv>`
    background: ${props => props.isSelected ? `#a3c0ff` : 'white'};
    color: ${props => props.isSelected ? `#1a4381` : '#7a7a7a'};
    padding:10px;
    font-size:15px;
    font-weight:bold;
`;
interface IMosaicSwitcher {
    switchView(): void;
    isMosaic: boolean;
}
const MosaicSwitcher: FC<IMosaicSwitcher> = (props) => {
    return (
        <Wrapper>
            <OptionHolder isSelected={props.isMosaic} onClick={props.switchView}>Mosaic</OptionHolder>
            <OptionHolder isSelected={!props.isMosaic} onClick={props.switchView}>List</OptionHolder>
        </Wrapper>
    );
}
export default MosaicSwitcher;