import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px 20px;
    width:100%;
    box-sizing:border-box;
    border-bottom:1px solid #e4e3e3;
`;

const BoldTitle = styled.div`
    font-weight:bold;
    color:#080868;
    position:relative;
`;

const ProposalsSection:FC = () =>{
    const [editableNow, setEditable] = useState(false);

    return (
        <Wrapper>
            <BoldTitle>
                Proposals
                <EditIconHolder onClick={() => setEditable(!editableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
        </Wrapper>
    )
}
export default ProposalsSection;