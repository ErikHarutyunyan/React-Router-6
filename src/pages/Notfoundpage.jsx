import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div>
      <p>
        This page doesn't exist. Go <Link to="/">home</Link>
      </p>
    </div>
  );
};

export { Notfoundpage };