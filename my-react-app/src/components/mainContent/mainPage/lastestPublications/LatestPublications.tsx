import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:auto;
    border-radius:3px;
    box-shadow: 0px 2px 2px #c5c5c5;
    margin-bottom:20px;
`;


const LatestPublications: FC = () =>{
    return(
        <Wrapper>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet distinctio nisi quam cum et vitae minima itaque illo recusandae mollitia hic, eligendi, repellendus atque, esse odio! Repudiandae, maxime commodi.
        </Wrapper>
    );
};
export default LatestPublications;