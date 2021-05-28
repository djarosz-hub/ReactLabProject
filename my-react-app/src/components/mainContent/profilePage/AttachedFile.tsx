import React, { FC } from 'react';
import styled from 'styled-components';
import { IconHolder } from './Profile';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:10px 0;
    background:#f5f5f5;
    margin:1px 0;
    position:relative;
`;
const DeleteBtn = styled.button`
    width:60px;
    height:20px;
    position:absolute;
    right:30px;
`;

interface IAttachedFile {
    editableNow: boolean;
    name: string;
    fileNameToDelete(name:string):void;
}
const AttachedFile: FC<IAttachedFile> = (props) => {
    return (
        <Wrapper>
            <IconHolder>
                <img src='../../../icons/plus.png' alt='plusIcon' />
            </IconHolder>
            {props.name}
            {props.editableNow && 
            <DeleteBtn onClick={()=>props.fileNameToDelete(props.name)}>Delete</DeleteBtn>}
        </Wrapper>
    );
}
export default AttachedFile;
