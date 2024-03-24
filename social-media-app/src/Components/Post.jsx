import React, { useState } from "react";
import Comment from "./Comment";

function Post(props) {
    
    const [like, setLikes] = useState(0);

    let listPosts = props.list.map((data, index)=> {
        return (
        <div>
        
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <p>Likes: {like}</p>
            <button onClick={()=> setLikes(like + 1)}>like</button>
            <p>Comments:</p>
            <Comment content="This is a test comment!" />
            <Comment content="This is another test comment!" />
            <Comment content="This is yet another test comment!" />
        </div>

            
        )
    })
   
    return(
    <div>
       {listPosts}
    </div>

    )
    
}

export default Post