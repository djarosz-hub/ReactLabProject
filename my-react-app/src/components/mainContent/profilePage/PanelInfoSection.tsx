import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { ISingleUser } from '../../../entities/users';
import { ISinglePhoto } from '../../../entities/photos';
import { EditIconHolder } from './Profile';
import InternalCorrespondant from './InternalCorrespondant';

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
const EditInfoHolder = styled.input`
    width:300px;
    height:25px;
    box-sizing:border-box;
`;
const SmallEditInfoHolder = styled(EditInfoHolder)`
    width:50px;
`;
const Select = styled.select`
    width:70px;
    height:25px;
`;
const LongerSelect = styled(Select)`
    width:150px;
`;

interface IPanelInfoSeciton {
    users: ISingleUser[];
    photos: ISinglePhoto[];
}
const wageInterval: string[] = ['Daily', 'Monthly', 'Yearly'];

const PanelInfoSection: FC<IPanelInfoSeciton> = (props) => {
    const [editableNow, setEditable] = useState(false);
    const [hourlyWage, setHourlyWage] = useState(610);
    const [servicesAndProjects, setServicesAndProjects] = useState('Corporate M&A and international acquisitions');
    const [termsCondUser, setTermsCondUser] = useState(props.users[1].name);
    const [termsCondInterval, setTermsCondInterval] = useState(wageInterval[1]);
    const [termsCondWage, setTermsCondWage] = useState(10);

    const wageEditHandler = (val: string, setFunc: Dispatch<SetStateAction<number>>, title:string) => {
        if (isNaN(+val))
            return alert(`${title} wage must be number`);
        else
            setFunc(+val);
    }
    const turnEditing = () => {
        setEditable(!editableNow);
        setInputsValues();
    }
    const setInputsValues = () => {
        const wageIdEl = document.getElementById('wageId') as HTMLOptionElement;
        if (wageIdEl != null)
            setTermsCondInterval(wageIdEl.value);
        const termsWage = document.getElementById('termsWage') as HTMLInputElement;
        if (termsWage != null)
            wageEditHandler(termsWage.value, setTermsCondWage, 'Terms');
        const hourlyWage = document.getElementById('hourlyWage') as HTMLInputElement;
        if (hourlyWage != null)
            wageEditHandler(hourlyWage.value, setHourlyWage, 'Hourly');
        const termCondUser = document.getElementById('termCondUser') as HTMLInputElement;
        if(termCondUser != null)
            setTermsCondUser(termCondUser.value);
    }
    return (
        <Wrapper>
            <BoldTitle>
                Panel informations
                <EditIconHolder onClick={() => turnEditing()}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
            <Title>
                Hourly fee
            </Title>
            {editableNow ?
                <div>
                    <SmallEditInfoHolder id='hourlyWage' defaultValue={hourlyWage} />
                    &nbsp;&euro;/hour (Negociated)
                </div> :
                <InfoHolder>
                    {hourlyWage}&euro;/hour (Negociated)
            </InfoHolder>}
            <Title>
                Terms &amp; conditions
            </Title>
            {editableNow ?
                <div>
                    <Select id='wageId' defaultValue={termsCondInterval}>
                        {wageInterval.map((el, index) => <option key={index} value={el}>{el}</option>)}
                    </Select>
                    <SmallEditInfoHolder id='termsWage' defaultValue={termsCondWage} />
                    &nbsp;k&euro; retainer - see with&ensp;
                    <LongerSelect id='termCondUser' defaultValue={termsCondUser}>
                        {props.users.map((user, index) => <option key={index} value={user.name}>{user.name}</option>)}
                    </LongerSelect>
                </div> :
                <InfoHolder>
                    {termsCondInterval} {termsCondWage}k&euro; retainer - see with&nbsp;{termsCondUser}
                </InfoHolder>}
            <BoldTitle>Services &amp; projects</BoldTitle>

            {editableNow ?
                <EditInfoHolder value={servicesAndProjects}
                    onChange={(e) => setServicesAndProjects(e.target.value)} placeholder={'give info men'} /> :
                <InfoHolder>
                    {servicesAndProjects}
                </InfoHolder>}
            <BoldTitle>Internal correspondants</BoldTitle>
                <InternalCorrespondant
                    user={props.users[0]}
                    photo={props.photos[0]}
                />
                <InternalCorrespondant
                    user={props.users[0]}
                    photo={props.photos[0]}
                />
        </Wrapper>
    )
}
export default PanelInfoSection;