import React, { FC, useState } from 'react';
import styled from 'styled-components';
import AttachedFile from './AttachedFile';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin: 10px 0;
`;

interface IFilesAttacher {
    editableNow: boolean;
}
const FilesAttacher: FC<IFilesAttacher> = (props) => {
    const [filesList, setFilesList] = useState<string[]>();

    const changeHandler = (event: React.ChangeEvent) => {
        const files = (event.target as HTMLInputElement).files;
        const newFilesList: string[] = [];
        if (files != null) {
            for (let i = 0; i < files.length; i++) {
                newFilesList.push(files[i].name);
            }
        }
        setFilesList(newFilesList);
    }
    const deleteFile = (name:string) => {
        const newList = filesList?.filter(file => file !== name);
        setFilesList(newList);
    }
    return (
        <Wrapper>
            {props.editableNow &&
                <input type="file" onChange={changeHandler} multiple></input>}
            {filesList && filesList.map((file, index) => 
            <AttachedFile 
            key={index} 
            editableNow={props.editableNow} 
            name={file} 
            fileNameToDelete={deleteFile}/>)}
        </Wrapper>
    );
}
export default FilesAttacher;
