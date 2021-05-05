import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/postsTypes';
import { ISinglePost } from '../entities/posts';

export const getPosts = (): Promise<ISinglePost> => ((dispatch: Dispatch) => {
    const postsList: Promise<ISinglePost>[] = [];
    let c = 1;
    for (let i = 1; i < 11; i++) {
        for (let j = c; j < c+10; j++) {
            postsList.push(
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${i}&id=${j}`)
                    .then(res => res.json())
                    .then(res => res[0])
                    .catch((e) => {
                        console.log(e);
                    })
            )
        }
        c+=10;      
    };
    return Promise.all(postsList).then((postsList: ISinglePost[]) => {
        dispatch({
            type: actionTypes.GET_POSTS,
            postsList
        })
    }).catch((e) => {
        console.log(e);
    })
}) as any;