import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin: 5px 0;
`;
const SingleLink = styled.div`
    display:flex;
    align-items:center;
    margin:5px;
    font-size:17px;
`;
const IconHolder = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:35px;
    height:25px;
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:#0d2463;
`;
const DirectionIcon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px #451cb4 solid;
    border-radius:2px;
    box-shadow: 2px 2px 2px #c5c5c5;
    &:hover{
        background-color:#a5a5a5;
    }
`;
const TextHolder = styled.span`
    margin-left:5px;
    width:135px;
    font-size:14px;
`;
const YourLinksSection: FC = () => {
    return (
        <Wrapper>
            <SingleLink>
                <IconHolder>
                    <img src="../../../icons/network.png" alt="networkIcon" />
                </IconHolder>
                <TextHolder>
                    Your network
                </TextHolder>
                <CustomLink to={"/publications"}>
                    <DirectionIcon>
                        <IconHolder>
                            <img src="../../../icons/user-plus.png" alt="userPlusIcon" />
                        </IconHolder>
                    </DirectionIcon>
                </CustomLink>
            </SingleLink>
            <SingleLink>
                <IconHolder>
                    <img src="../../../icons/publications.png" alt="publicationsIcon" />
                </IconHolder>
                <TextHolder>
                    Your Publications
                </TextHolder>
                <CustomLink to={"/publications"}>
                    <DirectionIcon>
                        <IconHolder>
                            <img src="../../../icons/plus.png" alt="plusIcon" />
                        </IconHolder>
                    </DirectionIcon>
                </CustomLink>
            </SingleLink>
        </Wrapper>
    );
};
export default YourLinksSection;