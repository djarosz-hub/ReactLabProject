import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IconHolder, EditIconHolder } from './Profile';
const MainWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px;
    /* width:1200px; */
    box-sizing:border-box;
    align-items:flex-end;
    border:1px solid #e4e3e3;
`;

//#region top divs
const TopTextHolder = styled.div`
    font-weight:bold;
    margin-right:5px;
`;
const TopDescription = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:15px 0;
`;
//#endregion

//#region pic section
const PicWrapper = styled.div`
    width:160px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#1c74af;
`;
const PicHolder = styled.div`
    width:80px;
    height:80px;
    margin-bottom:10px;
`;
const ProfileImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius:50%;
`;
//#endregion

const InfoWrapper = styled.div`
    display:flex;
`;
const MainInfo = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
`;
const InfoSection = styled.div`
    display:flex;
    flex-direction:column;
    width:500px;
    justify-content:flex-end;
    padding:10px;
    box-sizing:border-box;
`;

const InfoHolder = styled.div`
    height:25px;
    width:300px;
    display:flex;
    align-items:center;
    overflow:hidden;
`;
const BoldInfoHolder = styled(InfoHolder)`
    font-weight:bold;
`;
const EditInfoHolder = styled.input`
    width:400px;
    height:25px;
    box-sizing:border-box;
`;
interface IPersonSection {
    photoUrl: string;
    name: string;
    lastName: string;
    city: string;
    email: string;
    phone: string;
    company: string;
}
const PersonSection: FC<IPersonSection> = (props) => {
    const [name, setName] = useState(`${props.name} ${props.lastName}`);
    const [company, setCompany] = useState(props.company);
    const [city, setCity] = useState(props.city);
    const [title, setTitle] = useState('Partner');
    const [mail, setMail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [editableNow, setEditable] = useState(false);

    return (
        <MainWrapper>
            <TopDescription>
                <IconHolder>
                    <img src="../../../icons/comments.png" alt="msgIcon" />
                </IconHolder>
                <TopTextHolder>
                    Message
                </TopTextHolder>
                <IconHolder>
                    <img src="../../../icons/privacy.png" alt="CostamIcon" />

                </IconHolder>
                <TopTextHolder>
                    Create a request
                </TopTextHolder>
                <IconHolder>
                    <img src="../../../icons/bell.png" alt="bellIcon" />

                </IconHolder>
                <TopTextHolder>
                    Add to a cluster
                </TopTextHolder>
                <IconHolder>
                    <img src="../../../icons/logout.png" alt="logoutIcon" />

                </IconHolder>
            </TopDescription>
            <InfoWrapper>
                <PicWrapper>
                    <PicHolder>
                        <ProfileImg src={props.photoUrl} alt={"userPhoto"} />
                    </PicHolder>
                See profile
                </PicWrapper>
                <MainInfo>
                    <EditIconHolder onClick={() => setEditable(!editableNow)}>
                        <img src='../../../icons/cog.png' alt='cogIcon' />
                    </EditIconHolder>
                    <InfoSection>
                        {editableNow ?
                            <div>
                                <EditInfoHolder
                                    value={name}
                                    placeholder={'Name'}
                                    onChange={(e) => setName(e.target.value)} />
                                <EditInfoHolder
                                    maxLength={35}
                                    value={company}
                                    placeholder={'Company'}
                                    onChange={(e) => setCompany(e.target.value)} />
                                <EditInfoHolder
                                    value={city}
                                    placeholder={'City'}
                                    onChange={(e) => setCity(e.target.value)} />
                                <EditInfoHolder
                                    value={title}
                                    placeholder={'Title'}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div> :
                            <div>
                                <BoldInfoHolder>{name}</BoldInfoHolder>
                                <BoldInfoHolder>{company}</BoldInfoHolder>
                                <InfoHolder>{city}</InfoHolder>
                                <InfoHolder>{title}</InfoHolder>
                            </div>}
                    </InfoSection>
                    <InfoSection>
                        {editableNow ?
                            <div>
                                <EditInfoHolder
                                    value={mail}
                                    placeholder={'Mail'}
                                    onChange={(e) => setMail(e.target.value)} />
                                <EditInfoHolder
                                    value={phone}
                                    placeholder={'Phone'}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div> :
                            <div>
                                <InfoHolder>{mail}</InfoHolder>
                                <InfoHolder>{phone}</InfoHolder>
                            </div>}
                    </InfoSection>
                </MainInfo>
            </InfoWrapper>
        </MainWrapper >
    )
}
export default PersonSection;