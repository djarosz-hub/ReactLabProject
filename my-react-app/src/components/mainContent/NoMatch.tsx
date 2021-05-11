import React, { FC} from "react";
import { useLocation } from 'react-router-dom'
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    width:880px;
`;
const NoMatch:FC = () => {
    let location = useLocation();
    return (
        <Wrapper>
            <h1>
                Strona testowa
                <code>{location.pathname}</code>
            </h1>
        </Wrapper>
    );
};

export default NoMatch;
