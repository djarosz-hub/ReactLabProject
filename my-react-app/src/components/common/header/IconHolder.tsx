import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IIconInterface {
    source: string;
    alt: string;
    linkTo: string;
}
const Container = styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin:0 3px;
    &:hover{
        background-color:#e6e6e6;
    }
`;
const IconHolder: FC<IIconInterface> = props => {
    return (
        <Link to={props.linkTo}>
        <Container>
            <img src={props.source} alt={props.alt} />
        </Container>
        </Link>
    );
};

export default IconHolder;
