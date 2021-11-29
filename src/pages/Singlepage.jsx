import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  // useParams - վերադարձնումա path-ի պարամետրեր object
  const { id } = useParams(); // ստանում ենք id-ի value
  //   console.log(useParams());

  // useNavigate - դառելա useHistory - փոխարեն
  const navigate = useNavigate();
  // useNavigate - վերադարձնումա ֆունկցյա, ունի 2 պարամետր
  // 1-ինը թե որտեղ переадресацйа անեք ползователин
  // 2-ը պահենք հիշողությունում թե չէ

  const [post, setPost] = useState(null);

  // const goBack = () => navigate('/about');
  const goBack = () => navigate(-1); // -1 մի հատ հետա գնում որտեղից եկելա, կարանք +-ով գնաք
  const goHome = () => navigate("/", { replace: true }); // replace default false-յա եթե չենք ուզում հիշողությունում գրանցեք переадресацйан դնում ենք replace true
  const goPosts = () =>
    navigate("/posts", { state: { asd: 23, array: [1, 2, 3] } }); // state-ում կարանք փոխանցենք ինչ որ ինֆո, useLocation կերեվա

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      {/* <button onClick={goHome}>Go Home</button> -- ՍԵնց պետք չի անել Bad Approach */}
      <button onClick={goHome}>Go Home</button>
      <button onClick={goPosts}>Go Posts</button>
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
