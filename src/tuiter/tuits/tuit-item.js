/* eslint-disable */
import {deleteTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import React from "react";
import '../index.css';
import TuitStats from './tuit-stats'


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
 return(
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="wd-pfp m-1" src={`../../../images/${tuit.image}`}/>
            </div>
            <div class="col-10">
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit.id)}></i>
                <p class="wd-post-top"><b>{tuit.userName}</b> <i class="fas fa-check-circle"></i> {tuit.handle} &#183; {tuit.time}</p>
                <p class="wd-post-small-d">{tuit.tuit}</p>
                <TuitStats tuit={tuit}/>
            </div>
        </div>
    </li>
 );
};
export default TuitItem;