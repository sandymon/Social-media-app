import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Post'
import CreatePostForm from './Components/CreatePostForm'

function App() {
  const [count, setCount] = useState(0)
  const [showPost, setShowPost] = useState(false)

  const[posts, setPosts] = useState([])

  let handleButtonclick = ()=>{
     setShowPost(true)
  }

  let handleNewPostSubmit = (data) => {
    setPosts([...posts, data])
    console.log(data);
  }

  return (
   <div>
      <h1>Fakebook!</h1>
      <button onClick={handleButtonclick}>Create Post</button>
      
      <CreatePostForm onNewSubmit = {handleNewPostSubmit} />
      {/* Feed */}
      
     
      <Post  list = {posts} />



      {/* <Post content="This is another test post!" /> */ }

   </div>
  )
}

export default App
