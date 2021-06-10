import React, { FC } from 'react';
import styled from 'styled-components';
import { IState } from '../../../../reducers'
import { IPhotosReducer } from '../../../../reducers/photosReducers';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import SingleWorkspaceInfo from './SingleWorkspaceInfo';

const Wrapper = styled.div`
    width:250px;
    border-radius:5px;
    box-shadow: 0px 2px 3px #c5c5c5;
    height:200px;
    display:flex;
    flex-direction:column;
    position:relative;
    overflow:hidden;
`;
const PhotoContainer = styled.div`
    height:80px;
    width:100%;
    z-index:1;
`;
const ImgHolder = styled.img`
    width:250px;
    max-height:100%;
    object-fit:cover;
`;
const MiddleImgContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    height:70px;
    width:70px;
    top:calc(50% - 35px);
    left:10px;
    z-index:2;
    border-radius:4px;
    box-shadow: 0 1px 5px #c5c5c5;
    background:white;
`;
const BigIconHolder = styled.div`
    height:45px;
    width:45px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const BigIcon = styled.img`
    width:100%;
    overflow:visible;
`;
const Title = styled.div`
    position:absolute;
    top:50%;
    right:10px;
    width:145px;
    font-size:15px;
    font-weight:1000;
    z-index:2;
`;
const TextContainer = styled.div`
    height:100px;
    background:white;
    display:flex;
    flex-direction:column-reverse;
    font-size:14px;
    padding:10px;
`;
const UpdateInfo = styled.div`
    font-size:11px;
    padding-top:10px;
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:black;
`;

interface ISingleWorkspace {
    title: string;
    iconUrl: string;
    alt: string;
}
const SingleWorkspace: FC<ISingleWorkspace> = (props) => {
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos
    }));

    const nameHandler = (name: string) => {
        let nameSplit: string[] = name.split(' ');
        nameSplit = nameSplit.map(el => el[0].toUpperCase() + el.substring(1, el.length));
        return nameSplit.length > 1 ? nameSplit[1] : nameSplit[0];
    }
    return (
        <CustomLink to={
            {
                pathname: "workspaces",
                state: {
                    icon: props.iconUrl,
                    title: props.title,
                    from: "root"
                }
            }
        }>
            <Wrapper>
                <PhotoContainer>
                    <ImgHolder src={photosList[0]?.url} alt={photosList[0]?.title} />
                </PhotoContainer>
                <MiddleImgContainer>
                    <BigIconHolder>
                        <BigIcon src={props.iconUrl} alt={props.alt} />
                    </BigIconHolder>
                </MiddleImgContainer>
                <Title>
                    {props.title}
                </Title>
                <TextContainer>
                    <UpdateInfo>
                        Last updated {(Math.random() * 10).toFixed()} days ago
                </UpdateInfo>
                    <SingleWorkspaceInfo
                        iconUrl={props.iconUrl}
                        title={nameHandler(props.title)}
                    />
                </TextContainer>
            </Wrapper>
        </CustomLink >
    );
};
export default SingleWorkspace;