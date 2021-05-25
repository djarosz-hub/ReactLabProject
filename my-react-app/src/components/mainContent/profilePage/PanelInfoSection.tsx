import React, { FC, useState} from 'react';
import styled from 'styled-components';
import { ISingleUser } from '../../../entities/users';
import { ISinglePhoto } from '../../../entities/photos';
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
    padding:5px 0;
    font-weight:500;
    color:#9e9e9e;
    margin-top:10px;
`;
const BoldTitle = styled(Title)`
    font-weight:bold;
    color:inherit;
`;
const InfoHolder = styled.div`
    height:25px;
    width:500px;
    display:flex;
    align-items:center;
    overflow:hidden;
`;
const BoldInfoHolder = styled(InfoHolder)`
    font-weight:bold;
    width:auto;
`;
const EditInfoHolder = styled.input`
    width:250px;
    height:25px;
    box-sizing:border-box;
`;

interface IPanelInfoSeciton {
    users: ISingleUser[];
    photos: ISinglePhoto[];
}
const PanelInfoSection: FC<IPanelInfoSeciton> = () => {
    const [editableNow, setEditable] = useState(false);
    const [hourlyWage, setHourlyWage] = useState(610);

    const hourlyWageEditHandler = (val:string) => {
        const parsed = parseInt(val);
        if(isNaN(parsed))
            return alert('hourly wage is not a number');
        setHourlyWage(parsed);
    }
    return (
        <Wrapper>
            <BoldTitle>
                Panel informations
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
            <Title>
                Hourly fee
            </Title>
            <InfoHolder>
                {hourlyWage}&euro;/hours (Negociated)
            </InfoHolder>
            <Title>
                Terms &amp; conditions
            </Title>
            <InfoHolder>
                Monthly 10k&euro; retainer - see with Jeanny Smith
            </InfoHolder>
            <BoldTitle>Services &amp; projects</BoldTitle>
            <InfoHolder>
                Corporate M&amp;A and international acquisitions
            </InfoHolder>
            <BoldTitle>Internal correspondants</BoldTitle>

        </Wrapper>
    )
}
export default PanelInfoSection;