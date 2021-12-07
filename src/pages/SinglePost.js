import { useParams, Link } from "react-router-dom"


const SinglePost = ({ posts, deletePosts, edit }) => {

  const params = useParams()
  const id = parseInt(params.id)
  
  const post = posts.find((p) => p.id === id)
  
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
  
  
  return (
    <div style={div}>
      <h1>{post?.title}</h1>
      <h2>{post?.body}</h2>
      <button onClick={() => deletePosts(post)}>Delete</button>
      <button onClick={() => edit(post)}>Edit</button>
    </div>
  );
};

export default SinglePost;
