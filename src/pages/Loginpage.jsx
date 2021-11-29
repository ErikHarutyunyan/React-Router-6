import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const fromPage = location.state?.from?.pathname || "/"; // ստուգում ենք եթե կա .state .from pathname վեկալի եթե չէ "/"

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value; // վեկալում ենք username-ը

    signin(user, () => navigate(fromPage, { replace: true })); // փոխանցում ենք username-ը, հետո պերեադրեսացյա լինի fromPage-ի pathname
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
      {/* {fromPage} */}
    </div>
  );
};

export { Loginpage };
