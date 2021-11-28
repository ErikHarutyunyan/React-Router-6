import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  // useParams - վերադարձնումա path-ի պարամետրեր object
  const { id } = useParams(); // ստանում ենք id-ի value
  //   console.log(useParams());
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export { Singlepage };
