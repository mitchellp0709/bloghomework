import { useState, useEffect } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import AllPosts from './pages/AllPosts';
import Form from './pages/Form';
import SinglePost from './pages/SinglePost';
import Post from './components/Post';

function App() {

  ///////////////////////////
  //State and other variables
  ///////////////////////////
  const url = "https://masonite-practice-lab.herokuapp.com/posts/";
  const navigate = useNavigate()

  const [posts, setPosts] = useState([]);
 
  
  const blankPost = {
    title: "",
    body: ""
  }
   const [targetPost, setTargetPost] = useState(blankPost);

  ///////////////////////////
  // Functions
  ///////////////////////////

  //function to get all posts

const getPosts = async (newPost) => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};
  
  const addPost = async (newPost) => {
    await fetch(url, {
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPost)
    })
    getPosts()
  }

  const deletePosts = async (post) => {
    await fetch(url + post.id, {
      method: "delete"
    })
    getPosts()
    navigate("/")
  }

  //edit posts
  const updatePost = async (post) => {
    await fetch(url + post.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    getPosts()
    navigate("/")
  }
  
  const getTargetPost = (post) => {
    setTargetPost(post)
    navigate("/edit")
  }
  
  useEffect(() => { getPosts()},[])

  return (
    <div>
      <Link to="/new"><button>New Post</button></Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={<SinglePost posts={posts}
            deletePosts={deletePosts}
            edit={getTargetPost}
          />}
        />
        <Route
          path="/new"
          element={
            <Form
              handleSubmit={addPost}
              buttonLabel="Create Post"
              initialPost={blankPost}
            />
          }
        />
        <Route path="/edit" element={<Form
          posts={posts}
          handleSubmit={updatePost}
          initialPost={targetPost}
          buttonLabel="Update Post"
        />} />
      </Routes>
    </div>
  );
}

export default App;
