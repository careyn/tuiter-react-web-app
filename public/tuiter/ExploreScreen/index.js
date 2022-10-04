import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                <div class="col-11">
                    <input id="searchbar" placeholder="Search Tuiter"/>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fas fa-cog fa-2x" ></i></a> <br/>
                </div>
           </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#" >For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-pill" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-pill" href="#" >News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-pill" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-pill d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
           <div class="wrapper mt-1">
                <img src="../../images/starship.webp"/>
                <h2 class="ps-2">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
