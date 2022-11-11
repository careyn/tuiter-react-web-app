/* eslint-disable */

import React from "react";
import '../index.css';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
 const dispatch = useDispatch();
 return(
    <div className='wd-icons'>
        <i class="fa-regular fa-comment mt-1"></i> {tuit.replies}
        <i class="fa-solid fa-retweet mt-1"></i> {tuit.retuits}
        <div>
            <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
            }))} className="bi bi-heart-fill me-2 text-danger"></i>
            {tuit.likes}
        </div>
        <i class="fa-solid fa-share-nodes mt-1"></i>
    </div>
 );
};
export default TuitStats;