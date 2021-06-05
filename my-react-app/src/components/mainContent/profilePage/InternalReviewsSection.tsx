import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EditIconHolder } from './Profile';
import ReviewsTable from './tables/reviews/ReviewsTable';

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
    margin-bottom:10px;
    font-weight:bold;
    color:#080868;
    position:relative;
`;

const InternalReviewsSection: FC = () => {
    const [notEditableNow, setEditable] = useState(true);

    return (
        <Wrapper>
            <BoldTitle>
                Internal reviews
                <EditIconHolder onClick={() => setEditable(!notEditableNow)}>
                    <img src='../../../icons/cog.png' alt='cogIcon' />
                </EditIconHolder>
            </BoldTitle>
            <ReviewsTable showFirm={false} editableNow={notEditableNow}/>
            <BoldTitle>See more reviews</BoldTitle>
        </Wrapper>
    )
}
export default InternalReviewsSection;