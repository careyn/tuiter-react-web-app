/* eslint-disable */

const NavigationSidebar = () => {
    return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-home"></i> Home</li>
          <li class="list-group-item active d-none d-xl-block"><i class="fas fa-hashtag"></i> Explore</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-bell"></i> Notifications</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-envelope"></i> Messages</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-bookmark"></i> Bookmarks</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-list"></i> Lists</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-user"></i> Profile</li>
          <li class="list-group-item d-none d-xl-block"><i class="fas fa-ellipsis-h"></i> More</li>

          <li class="list-group-item d-block d-xl-none"><i class="fas fa-home"></i></li>
          <li class="list-group-item active d-block d-xl-none"><i class="fas fa-hashtag"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-bell"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-envelope"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-bookmark"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-list"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-user"></i></li>
          <li class="list-group-item d-block d-xl-none"><i class="fas fa-ellipsis-h"></i></li>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;