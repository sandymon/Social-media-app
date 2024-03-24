import React, { useState } from "react";
import Comment from "./Comment";

function Post(props) {
    
    const [like, setLikes] = useState(likes);
   
    return(
    <div>
        <h3>{props.content}</h3>
        <p>This is a test post we'll edit later!</p>
        <p>Likes: {like}</p>
        <button onClick={()=> setLikes(like + 1)}>like</button>
        <p>Comments:</p>
        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
    </div>

    )
    
}

export default Post