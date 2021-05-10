import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:135px;
    color:#1a4986;
    font-weight:1000;
`;
const IconHolder = styled.div`
  width:30px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ResumeWorkSection: FC = () => {
    return (
        <Wrapper>
            Followed
            <IconHolder>
                <img src="../../../icons/arrow-down.png" alt="arrowDropdown" />
            </IconHolder>
        </Wrapper>
    );
};
export default ResumeWorkSection;