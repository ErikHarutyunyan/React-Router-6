import React from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
const Private = () => {
  const { signout } = useAuth(); // useAuth վեկալում ենք signout
  const navigate = useNavigate();

  return (
    <div>
      <h1>Private page</h1>
      {/* գնում ենք home page  AuthProvider uesername փոխանցում null*/}
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};

export { Private };
