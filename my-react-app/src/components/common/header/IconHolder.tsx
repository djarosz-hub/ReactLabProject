import React, { FC } from "react";
import styled from "styled-components";

interface IIconInterface {
    source: string;
    alt: string;
}
const Container = styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    &:hover{
        background-color:#e6e6e6;
    }
`;
const IconHolder: FC<IIconInterface> = props => {
    return (
        <Container>
            <img src={props.source} alt={props.alt} />
        </Container>
    );
};

export default IconHolder;
