import { useParams } from "react-router-dom";

const Createpost = () => {
  console.log(useParams());
  return (
    <div>
      <h1>Create a post</h1>
    </div>
  );
};

export { Createpost };
