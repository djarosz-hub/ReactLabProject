import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;
interface ISingleHardcodedTile {
    iconName: string;
}
const SingleHardcodedTile: FC<ISingleHardcodedTile> = (props) => {
    return (
        <Wrapper>

        </Wrapper>
    );
}
export default SingleHardcodedTile;