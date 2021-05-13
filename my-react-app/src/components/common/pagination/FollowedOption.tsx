import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:90px;
    color:#1a4986;
    font-weight:1000;
    font-size:13px;
    justify-content:center;
    align-items:center;
    padding:5px 0;
    background:white;
    border: 1px solid #c5c5c5;
    position:relative;
    &:hover{
        background-color:black;
        color:white;
    }
`;

interface IFollowedOption {
    text:string;
    optionValue:boolean;
    closeDropMenu(): void;
    myPostsOnly(val: boolean): void;
}
const FollowedOption: FC<IFollowedOption> = (props) => {

    const ClickHandler = () =>{
        props.myPostsOnly(props.optionValue)
        props.closeDropMenu();
    }
    return (
        <Wrapper onClick={ClickHandler}>
            {props.text}
        </Wrapper>
    );
};
export default FollowedOption;