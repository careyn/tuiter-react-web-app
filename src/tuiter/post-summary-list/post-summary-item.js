/* eslint-disable */

import React from "react";
import '../index.css';
const PostSummaryItem = ({post}) => {
 return(
    <li class="list-group-item">
    <div class="row">
        <div class="col-9">
            <p class="wd-post-small-d">{post.userName} <i class="fas fa-check-circle"></i><span class="wd-post-small-top">&#183; {post.time}</span></p>
            <p class="wd-post-small-top m-0"><b>{post.topic}</b></p>
            <p class="wd-post-title">{post.title}</p>
        </div>
        <div class="col-3">
            <img class="wd-rounded-small-image m-1" src={`../../../images/${post.image}`}/>
        </div>
    </div>
</li>
 );
};
export default PostSummaryItem;