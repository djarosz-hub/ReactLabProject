import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IconHolder, EditIconHolder } from './Profile';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px;
    width:880px;
    box-sizing:border-box;
    border:1px solid #e4e3e3;
    border-top:none;
    position:relative;
`;
const Title = styled.div`
    height:20px;
    position:relative;
    padding:5px;
    font-weight:500;
    color:#9e9e9e;
`;
const AdditionalInfoSection: FC = () => {
    const [editableNow, setEditable] = useState(false);

    return (
        <Wrapper>
            <Title>
                Expertise
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </Title>
            <Title>Specialties</Title>
            <Title>Admission to practice law</Title>
            <Title>Counties</Title>
        </Wrapper>
    )
}
export default AdditionalInfoSection;