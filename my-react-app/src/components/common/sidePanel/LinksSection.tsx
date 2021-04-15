import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 20px 0 35px;
`;
const SingleLink = styled.div`
    display:flex;
    align-items:center;
    margin:7px;
`;
const IconHolder = styled.div`
    display:flex;
    align-items:center;
    margin-right:5px;
    width:30px;
    height:auto;
`;
const CustomLink = styled(Link)`
    width:150px;
    text-decoration: none;
    color:#0d2463;
    &:hover{
        background-color:#dbdbdb;
    }
`;
const SidePanel: FC = () => {
    return (
        <Wrapper>
            <CustomLink to={"/publications"}>
                <SingleLink>
                    <IconHolder>
                        <img src="../../../icons/publications.png" alt="publicationsIcon" />
                    </IconHolder>
                        Publications
                </SingleLink>
            </CustomLink>
            <CustomLink to={"/ecosystem"}>
                <SingleLink>
                    <IconHolder>
                        <img src="../../../icons/ecosystem.png" alt="ecosystemIcon" />
                    </IconHolder>
                        Ecosystem
                </SingleLink>
            </CustomLink>
            <CustomLink to={"/entities"}>
                <SingleLink>
                    <IconHolder>
                        <img src="../../../icons/entities2.png" alt="entities2Icon" />
                    </IconHolder>
                    Entities
                </SingleLink>
            </CustomLink>
        </Wrapper>
    );
};
export default SidePanel;