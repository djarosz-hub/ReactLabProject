import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import PersonSection from './PersonSection';
import AdditionalInfoSection from './AdditionalInfoSection';
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:880px;
    margin-top:20px;
    background:white;
    color:#0a0aa5;
`;
export const IconHolder = styled.div`
    width:40px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const EditIconHolder = styled(IconHolder)`
    position:absolute;
    right:0;
    top:10px;
    transform:scale(1.5);
`;
const Profile: FC = () => {
    const { photosList, usersList } = useSelector<IState, IPhotosReducer & IUsersReducer>(globalState => ({
        ...globalState.photos,
        ...globalState.users
    }));
    const user = usersList?.[0];
    return (
        <Wrapper>
            {usersList[0] && photosList[0] &&
                <PersonSection
                    name={user.name}
                    photoUrl={photosList[0].url}
                    lastName={user.username}
                    email={user.email}
                    city={user.address.city}
                    phone={user.phone}
                    company={user.company.name}
                />
            }
            <AdditionalInfoSection />
        </Wrapper>
    )

}
export default Profile;
