import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1200px;
    background:white;
    box-shadow:0 2px 3px #d3d1d1;
    border: 1px solid #b4b4b4;
    overflow:hidden;
    border-radius:4px;
    padding-bottom:10px;
    margin-bottom:20px;
`;
const MainPhotoHolder = styled.div`
    width:1200px;
    height:200px;
`;
const ContentHolder = styled.div`
    display:flex;
    position:relative;
    align-items:center;
`;
const BigIconHolder = styled.div`
    display:flex;
    width:65px;
    height:70px;
    padding:20px;
    margin:0 20px;
    align-items:center;
    box-sizing:border-box;
    justify-content:center;
`;
const BigIcon = styled.img`
    transform:scale(2);
`;
const TextHolder = styled.div`
    display:flex;
    flex-direction:column;
`;
const Title = styled.div`
    font-size:20px;
    font-weight:bold;
    color:#1a226b;
    padding:10px 0;
`;
const Content = styled.div`
    font-size:16px;
    color:#afafaf;
    padding:10px 30px 10px 0;
`;
const CogIconHolder = styled.div`
    position:absolute;
    top:15px;
    right:20px;
    transform:scale(1.5);
`;

interface IWorkspaceHeader {
    iconName: string;
    title: string;
}
const WorkspaceHeader: FC<IWorkspaceHeader> = (props) => {
    return (
        <Wrapper>
            <MainPhotoHolder>
                <img src="https://picsum.photos/1200/200" alt="mainPhoto" />
            </MainPhotoHolder>
            <ContentHolder>
                <BigIconHolder>
                    <BigIcon src={props.iconName} alt={`Icon`} />
                </BigIconHolder>
                <TextHolder>
                    <Title>{props.title}</Title>
                    <Content>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</Content>
                </TextHolder>
                <CogIconHolder>
                    <img src={'icons/cog.png'} alt={'cogIcon'} />
                </CogIconHolder>
            </ContentHolder>
        </Wrapper>
    );
}
export default WorkspaceHeader;