import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/photoTypes';
import { ISinglePhoto } from '../entities/photos';

export const getPhotos = (): Promise<ISinglePhoto> => ((dispatch: Dispatch) => {
    const photosList: Promise<ISinglePhoto>[] = [];
    for (let i = 1; i < 31; i++) {
        photosList.push(
            fetch(`https://jsonplaceholder.typicode.com/photos?id=${i}`)
                .then(res => res.json())
                .then(res => res[0])
                .catch((e) => {
                    console.log(e);
                })
        )
    };
    return Promise.all(photosList).then((photosList: ISinglePhoto[]) => {
        dispatch({
            type: actionTypes.GET_PHOTOS,
            photosList
        })
    }).catch((e) => {
        console.log(e);
    })
}) as any;