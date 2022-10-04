/* eslint-disable */

const PostSummaryItem = (post) => {
    return (`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-9">
                        <p class="wd-post-small-top m-0">${post.topic}</p>
                        <p class="wd-post-small-d">${post.userName} <i class="fas fa-check-circle"></i><span class="wd-post-small-top">&#183; ${post.time}</span></p>
                        <p class="wd-post-title"><b>${post.title}</b></p>
                    </div>
                    <div class="col-3">
                        <img class="wd-rounded-small-image m-1" src="${post.image}"/>
                    </div>
                </div>
            </li>
    `);
}
export default PostSummaryItem;