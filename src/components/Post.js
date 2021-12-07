import { Link } from "react-router-dom";


const Post = ({post}) => {
  return <div>
    <Link to={`post/${post.id}`}>
      <h1>{post.title}</h1>
    </Link>
    <h2>{post.body}</h2>
  </div>
};

export default Post;
