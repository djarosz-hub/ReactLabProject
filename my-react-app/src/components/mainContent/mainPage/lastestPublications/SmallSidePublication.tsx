import React, { FC } from 'react';
import styled from 'styled-components';
import PublicationInfo from './PublicationInfo';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
    text-decoration: none;
`;
const Wrapper = styled.div`
    display:flex;
    width:100%;
    box-sizing:border-box;
`;
const ImgHolder = styled.div`
    width:80px;
    height:80px;
    display:inline-block;
`;

const Img = styled.img`
    max-width:100%;
    max-height:100%;
`;

const TextHolder = styled.div`
    width:100%;
    color: black;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;
const Text = styled.div`
    padding-left:5px;
`;
interface ISmallSidePublication {
    imgUrl: string;
    postBody: string;
    userName: string;
    userPhotoUrl: string;
}
const SmallSidePublication: FC<ISmallSidePublication> = (props) => {

    return (
        <CustomLink to={"/publications"}>
            <Wrapper>
                <ImgHolder>
                    <Img src={props.imgUrl} alt={props.imgUrl} />
                </ImgHolder>
                <TextHolder>
                    <Text>{props.postBody}</Text>
                    <PublicationInfo
                        iconUrl={props.userPhotoUrl}
                        author={props.userName}
                    />
                </TextHolder>
            </Wrapper>
        </CustomLink>
    )
}
export default SmallSidePublication;