import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
 const {tuits} = useSelector((state) => state.tuitsData)
 console.log(tuits)
 
 return(
   <ul className="list-group">
     {
       tuits.map(post =>
         <PostSummaryItem post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;