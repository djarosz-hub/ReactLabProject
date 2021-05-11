import React, { FC, useState, useEffect } from 'react';
import SingleComment from '../mainContent/mainPage/resumeWork/SingleComment';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPostsReducer } from '../..//reducers/postsReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
interface ICommentsPagination {
    filterValue: string;
}

const CommentsPagination: FC<ICommentsPagination> = (props) => {

    const { usersList, postsList, photosList, commentsList } = useSelector<IState, IUsersReducer & IPostsReducer & IPhotosReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments
    }));
    const [filterValue, setFilterValue] = useState('');
    useEffect(() => {
        setFilterValue(props.filterValue)
    }, [props.filterValue]);
    const filterHandler = (title: string) => {
        const filter = filterValue.trim().toLowerCase();
        return title.toLowerCase().includes(filter) ? true : false;
    }
    return (
        <>
            {usersList &&
                postsList &&
                photosList &&
                commentsList &&
                commentsList?.filter(comment => filterHandler(comment.name)).map((comment, index) =>

                    <SingleComment
                        key={index}
                        title={comment.name}
                        body={comment.body}
                        photoUrl={photosList?.[postsList?.[postsList?.findIndex(el => el.id === comment.postId)]?.id - 1]?.url}
                        userName={usersList?.[postsList?.[postsList?.findIndex(el => el.id === comment.postId)]?.id - 1]?.name}
                    />)
            }
            <div>{filterValue}dupa</div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </>
    )
}

export default CommentsPagination;