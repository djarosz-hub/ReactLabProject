import React, { FC } from 'react';
import styled from 'styled-components';
import SingleWorkspace from './SingleWorkspace';
import Slider from 'react-slick';


const Wrapper = styled.div`
    width:auto;
    margin-bottom:20px;
`;
const Header = styled.div`
    font-size:18px;
    padding-left:15px;
    margin-bottom:10px;
`;
const Container = styled.div`
    display:flex;
`;
const WorkspacesSection: FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Wrapper>
            <Header>Workspaces</Header>
            <Container>
                {/* <Slider {...settings}> */}
                    <SingleWorkspace />
                    <SingleWorkspace />
                    <SingleWorkspace />
                    <SingleWorkspace />
                {/* </Slider> */}
            </Container>
        </Wrapper>
    );
};
export default WorkspacesSection;