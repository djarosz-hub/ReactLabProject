import React, { FC } from 'react';
import styled from 'styled-components';
import PictureSection from './PictureSection';
import YourLinksSection from './YourLinksSection';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px 20px 0 20px;
    border-radius:4px;
    background-color: #fff;
    box-shadow: 0px 2px 7px #c5c5c5;
`;

const SidePanel: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    return (
        <Wrapper>
            {usersList[0] &&
                <PictureSection
                    name={usersList[0].name}
                    picId={"2"}
                    jobTitle={"Job title"}
                    company={usersList[0].company.name}
                />}
            <YourLinksSection />
        </Wrapper>
    );
};
export default SidePanel;