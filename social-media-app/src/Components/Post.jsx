import React, { useState } from "react";
import Comment from "./Comment";

function Post(props) {
    
    const [like, setLikes] = useState(0);

    
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
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