import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:flex-end;
    color:#0e156d;
    font-size:15px;
    padding: 25px 15px;
    width:300px;
    background:white;
    border-radius:5px;
    box-shadow:0 2px 5px #d4d4d4;

`;
const Title = styled.div`
    font-size:18px;
    padding:10px 0;
`;
const IconHolder = styled.div`
    display:flex;
    position:relative;
    padding-left:10px;
    padding-bottom:10px;
`;
const BackgroundIconHolder = styled(IconHolder)`
    position:absolute;
    top:40px;
    right:40px;
`;
const BigIcon = styled.img`
    transform:scale(1.5);
`;
const BackgroundIcon = styled.img`
    transform:scale(3);
    opacity:0.1;
`;
const TextHolder = styled.div`
    display:flex;
`;
const BoldTitlePart = styled.span`
    font-weight:bold;
`;
export interface ISingleHardcodedTile {
    iconName: string;
    title: string;
    text: string;
}
const SingleHardcodedTile: FC<ISingleHardcodedTile> = (props) => {
    const partialTitle = props.title.split(' ');
    return (
        <Wrapper>
            <IconHolder>
                <BigIcon src={`icons/${props.iconName}.png`} alt={`${props.iconName}Icon`} />
            </IconHolder>
            <BackgroundIconHolder>
                <BackgroundIcon src={`icons/${props.iconName}.png`} alt={`${props.iconName}Icon`} />
            </BackgroundIconHolder>
            <Title>
                <span>{partialTitle?.[0]}&nbsp;</span>
                <span>{partialTitle?.[1]}&nbsp;</span>
                <BoldTitlePart>{partialTitle?.[2]}</BoldTitlePart>
            </Title>
            <TextHolder>
                {props.text}
            </TextHolder>

        </Wrapper>
    );
}
export default SingleHardcodedTile;