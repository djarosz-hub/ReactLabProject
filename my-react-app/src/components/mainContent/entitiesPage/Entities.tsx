import React, { FC } from 'react';
import styled from 'styled-components';
import PhotoPile from './PhotoPile';

const Wrapper = styled.div`
    max-width:1200px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
`;

const Entities: FC = () => {
    return (
        <Wrapper>
            <PhotoPile photoUrl='https://via.placeholder.com/600/92c952' title='sdsdsdsds' isMosaic={true}></PhotoPile>
        </Wrapper>
    );
}
export default Entities;