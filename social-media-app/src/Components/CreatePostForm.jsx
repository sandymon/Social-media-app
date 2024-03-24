import React, { useState } from "react";

function CreatePostForm(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    let handleTitleChange = (event) => {
        setTitle(event.target.value)
        console.log(event.target.value)
    }

    let handleContentChange= (event) => {
        setContent(event.target.value)
        console.log(event.target.value)
    }

    let haddleSubmit = (event) => {
        event.preventDefault()
        if(title  === "" || content === ""){
            alert("Cannot submit Empty Post")
        }else{
            props.onNewSubmit({title, content})
            setContent("")
            setTitle("")
        }
    }



    return (
    <div>
        <form onSubmit={haddleSubmit}> 
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={handleTitleChange}/>
            
            <label htmlFor="Message">Message</label>
            <textarea type="textarea" name="content" onChange={handleContentChange}/>

            <input type="submit"/>

        </form>

    </div>
    )
  }

  export default CreatePostForm;
