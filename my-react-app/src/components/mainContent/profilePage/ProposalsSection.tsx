import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';
import ReviewsTable from './tables/ReviewsTable';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 20px 20px 20px;
    width:100%;
    box-sizing:border-box;
    border-bottom:1px solid #e4e3e3;
`;

const BoldTitle = styled.div`
    padding-top:10px;
    font-weight:bold;
    color:#080868;
    position:relative;
    margin-bottom:10px;
`;
const BoldText = styled(BoldTitle)`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:#4d86c7;
    width:100%;
    margin:0;
`;

const ProposalsSection: FC = () => {
    const [notEditableNow, setEditable] = useState(true);

    return (
        <Wrapper>
            <BoldTitle>
                Proposals
                <EditIconHolder onClick={() => setEditable(!notEditableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
            <ReviewsTable showFirm={true} editableNow={notEditableNow}/>
            <BoldText>See more proposals</BoldText>
        </Wrapper>
    )
}
export default ProposalsSection;