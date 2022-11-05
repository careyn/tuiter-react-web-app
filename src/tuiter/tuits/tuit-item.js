/* eslint-disable */
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import React from "react";
import '../index.css';
import TuitStats from './tuit-stats'


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (tuit) => {
        dispatch(deleteTuitThunk(tuit));
    }
    const updateTuit = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    }
 return(
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="wd-pfp m-1" src={`../../../images/${tuit.image}`}/>
            </div>
            <div class="col-10">
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit)}></i>
                <p class="wd-post-top"><b>{tuit.userName}</b> <i class="fas fa-check-circle"></i> {tuit.handle} &#183; {tuit.time}</p>
                <p class="wd-post-small-d">{tuit.tuit}</p>
                <TuitStats tuit={tuit}/>
            </div>
            <div>
                Dislikes: {tuit.dislikes || 0}
                <i onClick={() => updateTuit({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                })} className="far fa-thumbs-down ms-2"></i>
            </div>
        </div>
    </li>
 );
};
export default TuitItem;