/* eslint-disable */

const NavigationSidebar = () => {
    return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <li class="list-group-item"><i class="fas fa-home"></i> Home</li>
          <li class="list-group-item active"><i class="fas fa-hashtag"></i> Explore</li>
          <li class="list-group-item"><i class="fas fa-bell"></i> Notifications</li>
          <li class="list-group-item"><i class="fas fa-envelope"></i> Messages</li>
          <li class="list-group-item"><i class="fas fa-bookmark"></i> Bookmarks</li>
          <li class="list-group-item"><i class="fas fa-list"></i> Lists</li>
          <li class="list-group-item"><i class="fas fa-user"></i> Profile</li>
          <li class="list-group-item"><i class="fas fa-ellipsis-h"></i> More</li>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;