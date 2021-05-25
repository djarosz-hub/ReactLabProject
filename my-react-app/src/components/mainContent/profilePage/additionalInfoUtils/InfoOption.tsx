import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:#0f5f77;
    background:#b5d5eb;
    border-radius:3px;
    font-size:15px;
    padding:5px 30px;
    margin:3px 5px;
    position:relative;
`;
const DeleteButton = styled.div`
    position:absolute;
    font-size:15px;
    top: 5px;
    right:5px;
    width:15px;
    display:flex;
    font-weight:bold;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    &:hover{
        background:#3db4c9;
    }
`;
interface IInfoOption {
    text: string;
    editable:boolean;
    delete(val:string):void;
}

const InfoOption: FC<IInfoOption> = (props) => {
    return (
        <Wrapper>
            {props.text}
            {props.editable && 
            <DeleteButton onClick={()=>props.delete(props.text)}>
                X
            </DeleteButton>}
        </Wrapper>
    );
}
export default InfoOption;