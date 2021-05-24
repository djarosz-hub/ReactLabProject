import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';
import { counties, expertise, practiceLaw, specialties } from './additionalInfoUtils/additionalInfoOptions';
import OptionsHolder from './additionalInfoUtils/OptionsHolder';

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
    const [expertiseList, setExpertiseList] = useState([expertise[0]]);
    const [practiceLawList, setPracticeLawList] = useState([practiceLaw[0]]);
    const [specialtiesList, setSpecialtiesList] = useState([specialties[0]]);
    const [countiesList, setCountiesList] = useState([counties[0]]);

    return (
        <Wrapper>
            <Title>
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
                Expertise
            </Title>
            <OptionsHolder
                id={'expertise'}
                selectedOptions={expertiseList}
                allOptions={expertise}
                editable={editableNow}
                setValues={setExpertiseList}
            />
            <Title>Specialties</Title>
            <OptionsHolder
                id={'specialties'}
                selectedOptions={specialtiesList}
                allOptions={specialties}
                editable={editableNow}
                setValues={setSpecialtiesList}
            />
            <Title>Admission to practice law</Title>
            <OptionsHolder
                id={'practiceLaw'}
                selectedOptions={practiceLawList}
                allOptions={practiceLaw}
                editable={editableNow}
                setValues={setPracticeLawList}
            />
            <Title>Counties</Title>
            <OptionsHolder
                id={'counties'}
                selectedOptions={countiesList}
                allOptions={counties}
                editable={editableNow}
                setValues={setCountiesList}
            />
        </Wrapper>
    )
}
export default AdditionalInfoSection;