/* eslint-disable */

import React from "react";
import '../index.css';

const TuitStats = ({tuit}) => {
 let likedColor = tuit.liked ?  {color:'red'} : undefined
 let likedFill = tuit.liked ?  'fa-solid fa-heart mt-1' : 'fa-regular fa-heart mt-1'
 return(
    <div className='wd-icons'>
        <i class="fa-regular fa-comment mt-1"></i> {tuit.replies}
        <i class="fa-solid fa-retweet mt-1"></i> {tuit.retuits}
        <i style={likedColor} class={likedFill}></i> {tuit.likes}
        <i class="fa-solid fa-share-nodes mt-1"></i>
    </div>
 );
};
export default TuitStats;