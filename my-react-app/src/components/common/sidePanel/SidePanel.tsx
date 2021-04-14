import React, {FC} from 'react';
import styled from 'styled-components';
import ProfileSection from "./ProfileSection";
import LinksSection from "./LinksSection";

const Wrapper = styled.div`
    width:23%;
    height:100%;
    display:flex;
    flex-direction:column;
`;
const SidePanel: FC = () =>{
    return(
        <Wrapper>
            <ProfileSection/>
            <LinksSection/>
        </Wrapper>
    );
};
export default SidePanel;