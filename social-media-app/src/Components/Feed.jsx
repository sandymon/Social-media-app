import React from "react";



function Feed(props) {

    let listPosts = props.list.map((data, index)=> {
        return (
           <Post title = {data.title} content = {data.content}/>
        )
    })
    
    return(
        {listPosts}

    )
}


