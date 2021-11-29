import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  // useLocation մոտը պահումա ինֆորմացիյա ՝
  /*
                                            pathname: "/posts"
                                            search: "" եթե url գրենք /posts?x=1 մեր search value կլինե search։ "?x=1"
                                            hash: ""
                                            state: null Սրա մեջ մենք կարանք դնեք ինֆո
                                            key: "uuy7b074"
                                          */
  console.log(useLocation());
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <Link to="/posts/private">Add private</Link>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export { Blogpage };
