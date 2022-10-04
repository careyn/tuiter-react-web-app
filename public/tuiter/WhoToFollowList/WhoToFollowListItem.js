/* eslint-disable */

const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="wd-user" src=${who.avatarIcon}/> 
            </div>
            <div class="col-7">
                <p class="wd-name m-0">${who.userName} <i class="fas fa-check-circle"></i></p>
                <p class="wd-at m-0">@${who.handle}</p>
            </div>
            <div class="col-3">
                <button type="submit" class="btn btn-primary override-follow">Follow</button>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;