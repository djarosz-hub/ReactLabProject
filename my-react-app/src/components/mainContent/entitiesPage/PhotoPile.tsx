import React, { FC } from 'react';
import styled from 'styled-components';

type WrapperContainer = {
    isMosaic: boolean;
}
const Wrapper = styled.div<WrapperContainer>`
    display:flex;
    width:auto;
    width: ${props => props.isMosaic ? 350 + "px" : 700 + "px"};
    box-sizing:border-box;
    padding:10px;
    background:white;
    border-radius:5px;
    box-shadow: 0 2px 3px #c0c0c0;
`;

const TextHolder = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    font-size:15px;
    color:#b9b9b9;
    justify-content:space-between;
    padding:5px;
`;
const Title = styled.div`

    font-size:18px;
    color:#0c0e74;
`;

interface IPile {
    photoUrl: string;
    title: string;
    isMosaic: boolean;
}
const PhotoPile: FC<IPile> = (props) => {
    return (
        <Wrapper isMosaic={props.isMosaic}>
                <img style={{ width:"80px", height:"80px", marginRight:"10px"}} src={props.photoUrl} alt='pilePhoto'/>
            <TextHolder>
                <Title>{props.title}</Title>
                Caracas 1050, Distrito Capital, Venezuela
            </TextHolder>
        </Wrapper>
    );
}
export default PhotoPile;