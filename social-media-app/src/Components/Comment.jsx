import React from "react";
import './comment.css'

function Comment(props){
    return(
    <div id="commentBox">
    <p>{props.content}</p>
    </div>
    )
}

export default Comment
    