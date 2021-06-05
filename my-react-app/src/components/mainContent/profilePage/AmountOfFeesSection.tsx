import React, { FC, useState} from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';
import FeesTable from './tables/fees/FeesTable';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px 50px 20px;
    width:100%;
    box-sizing:border-box;
`;
const BoldTitle = styled.div`
    padding-top:10px;
    font-weight:bold;
    color:#080868;
    position:relative;
    margin-bottom:10px;
`;

const AmountOfFees:FC = () =>{
    const [editableNow, setEditable] = useState(false);

    return(
        <Wrapper>
            <BoldTitle>
                Amount of fees
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
            <FeesTable editableNow={editableNow}/>
        </Wrapper>
    );
}
export default AmountOfFees;