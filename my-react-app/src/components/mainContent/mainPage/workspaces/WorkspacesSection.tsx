import React, { FC } from 'react';
import styled from 'styled-components';
import SingleWorkspace from './SingleWorkspace';
import Slider from 'react-slick';


const Wrapper = styled.div`
    width:auto;
`;
const Header = styled.div`
    font-size:18px;
    padding-left:15px;
    font-weight:1000;
    margin-bottom:10px;
    color: #111769;
`;
const Container = styled.div`
    padding:5px 0;
`;

const CustomSlider = styled(Slider)`
    display:flex;
    align-items:center;
    width:100%;
    overflow: hidden;
    .slick-list{
        height:210px;
    }
`;
const WorkspacesSection: FC = () => {

    const settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
    };

    return (
        <Wrapper>
            <Header>Workspaces</Header>
            <Container>
                <CustomSlider {...settings}>
                    <SingleWorkspace title={'Client contract'} iconUrl={'../../icons/publications.png'} alt={'publications'}/>
                    <SingleWorkspace title={'Supplier contract'} iconUrl={'../../icons/people.png'} alt={'people'}/>
                    <SingleWorkspace title={'Corporate'} iconUrl={'../../icons/entities.png'} alt={'entities'}/>
                    <SingleWorkspace title={'Real estate contracts'} iconUrl={'../../icons/comments.png'} alt={'comments'}/>
                    <SingleWorkspace title={'Group Norms'} iconUrl={'../../icons/ecosystem.png'} alt={'ecosystem'}/>
                </CustomSlider>
            </Container>
        </Wrapper>
    );
};
export default WorkspacesSection;