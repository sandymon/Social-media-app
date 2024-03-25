import React, { useState } from "react";
import Comment from "./Comment";
import './Post.css'

function Post(props) {
    
    const [like, setLikes] = useState(0);

    const[comment, setcomment] = useState("")

    const [comments, setcomments] = useState([]);
    const [showcommentB,setshowcommentB] = useState(false)

    let handleAddComment = ()=>{
        setshowcommentB(true)
    }

    let handleCommentChange = (data)=>{
        setcomment(data.target.value)
    }
    let handleCommentSubmision = (event)=>{
        event.preventDefault()
        if(comment === ""){
            alert="comment box is empty"
        }else{
        setcomments([...comments, comment])
        setcomment("")
        console.log(comments);
        }
    }

    let addComments = comments.map((data, index)=>{
        return(
            <div>
             <span>{index + 1}</span>
             <Comment content = {data}/>
             </div>
        )

    })
    return(
        <div className="postdiv">
            <h2 className="post">{props.title}</h2>
            <p className="post">{props.content}</p>
            <p className="postlike"> Likes: {like}</p>
            <button className="postlike button"  onClick={()=> setLikes(like + 1)}>like</button>
            <p>Comments:
                              
                 <button onClick={handleAddComment} >add comment</button></p>
            
            {showcommentB &&(<form onSubmit={handleCommentSubmision}> 
            <textarea type="text" name = "comment" placeholder="write your comment" onChange={handleCommentChange}/> 
            <br /><input type="submit" /> <br /> <br />
            </form>)}

            <div>
                {addComments}
            </div>
            
        </div>

    )
    
}

export default Post