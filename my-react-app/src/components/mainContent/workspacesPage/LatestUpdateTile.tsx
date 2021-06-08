import React, { FC } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2px 10px;
    border-radius:3px;
    box-shadow: 0 2px 3px #bebebe;
    height:25px;
    border: 1px solid #919191;
    margin-right:20px;
`;
const Icon = styled.img`
    transform:scale(0.6);
`;
const Text = styled.div`
    padding:0 5px;
    font-weight:bold;
`;
export interface ILatestUpdateTile {
    bgColor: string;
    textColor: string;
    text: string;
    containsIcon: boolean;
    iconName: string;
}
const LatestUpdateTile: FC<ILatestUpdateTile> = (props) => {
    return (
        <Wrapper style={{ background: `${props.bgColor}`, color: `${props.textColor}` }}>
            {props.containsIcon &&
                <Icon src={`icons/${props.iconName}.png`} alt={`${props.iconName}Icon`} />}
            <Text>
                {props.text}
            </Text>
        </Wrapper>
    );
}
export default LatestUpdateTile;