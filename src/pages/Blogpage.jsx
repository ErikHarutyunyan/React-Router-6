import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";

function Blogpage() {
  const [posts, setPosts] = useState([]);

  // useLocation մոտը պահումա ինֆորմացիյա ՝
  /*  
    console.log(useLocation());
                              pathname: "/posts"
                              search: "" եթե url գրենք /posts?x=1 մեր search value կլինե search։ "?x=1"
                              hash: ""
                              state: null Սրա մեջ մենք կարանք դնեք ինֆո
                              key: "uuy7b074"
  */

  const [searchParams, setSearchParams] = useSearchParams();
  // URl.ru/posts?post=abc&data=
  // useSearchParams ֆունկցիանալությունը useState-պեսա

  const postQuery = searchParams.get("post") || ""; // Ստանում եմ searchParams-ից post-ի value
  const latest = searchParams.has("latest"); // Ստուգում ենք կա latest անունով բան
  const startsForm = latest ? 80 : 1; // եթե կա latest տու 80 չէ 1

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <BlogFilter
        // փոխանցում ենք որպեսզ props
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/private">Add private</Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsForm
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
}

export { Blogpage };
