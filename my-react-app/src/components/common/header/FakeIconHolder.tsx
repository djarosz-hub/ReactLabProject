import React, { FC } from "react";
import styled from "styled-components";

interface IFakeIconInterface {
    source: string;
    alt: string;
    fakeNotCounter: number;
}
const Container = styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background-color:#e6e6e6;
    margin:0 3px;
    position: relative;
`;
const FakeCounter = styled.div`
    width:15px;
    height:15px;
    position: absolute;
    right:0;
    top:0;
    background:#226c8f;
    color: white;
    font-size:9px;
    font-weight:bold;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const FakeIconHolder: FC<IFakeIconInterface> = props => {
    return (
        <Container>
            <FakeCounter>{props.fakeNotCounter}</FakeCounter>
            <img src={props.source} alt={props.alt} />
        </Container>
    );
};

export default FakeIconHolder;
