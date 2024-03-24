import React, { useState } from "react";
import Comment from "./Comment";

function Post() {
    let likes = 0
    const [like, setLikes] = useState(likes);
    likes = like
    return(
    <div>
        <h3>Test Post</h3>
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