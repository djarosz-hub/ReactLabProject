import { ISinglePhoto } from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotosReducer {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotosReducer => ({
    photosList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const payLoad: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: payLoad.photosList
            }
        }
        default: {
            return state;
        }
    }
}