import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/commentTypes';
import { ISingleComment } from '../entities/comments';

export const getComments = (): Promise<ISingleComment> => ((dispatch: Dispatch) => {
    const commentsList: Promise<ISingleComment>[] = [];
    let c = 1;
    for (let i = 1; i < 11; i++) {
        for (let j = c; j < c+5; j++) {
            commentsList.push(
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${i}&id=${j}`)
                    .then(res => res.json())
                    .then(res => res[0])
                    .catch((e) => {
                        console.log(e);
                    })
            )
        }
        c+=5;      
    };
    return Promise.all(commentsList).then((commentsList: ISingleComment[]) => {
        dispatch({
            type: actionTypes.GET_COMMENTS,
            commentsList
        })
    }).catch((e) => {
        console.log(e);
    })
}) as any;