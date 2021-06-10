import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';
import { counties, expertise, practiceLaw, specialties } from './additionalInfoUtils/additionalInfoOptions';
import OptionsHolder from './additionalInfoUtils/OptionsHolder';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px;
    width:100%;
    box-sizing:border-box;
    border-bottom:1px solid #e4e3e3;
    position:relative;
`;
const Title = styled.div`
    height:20px;
    position:relative;
    padding:5px 0;
    font-weight:500;
    color:#9e9e9e;
`;

const AdditionalInfoSection: FC = () => {
    const [editableNow, setEditable] = useState(false);
    return (
        <Wrapper>
            <Title>
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
                Expertise
            </Title>
            <OptionsHolder
                id={'expertise'}
                allOptions={expertise}
                editable={editableNow}
            />
            <Title>Specialties</Title>
            <OptionsHolder
                id={'specialties'}
                allOptions={specialties}
                editable={editableNow}
            />
            <Title>Admission to practice law</Title>
            <OptionsHolder
                id={'practiceLaw'}
                allOptions={practiceLaw}
                editable={editableNow}
            />
            <Title>Counties</Title>
            <OptionsHolder
                id={'counties'}
                allOptions={counties}
                editable={editableNow}
            />
        </Wrapper>
    )
}
export default AdditionalInfoSection;