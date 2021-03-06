import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';

export const getUsers = (): Promise<ISingleUser> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res => res.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
        .catch((e) => {
            console.log(e);
        })
}) as any;