import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  if (!user) {
    // Եթե չի անցել աուդենտիֆիկացյան թող գնա Login page
    // state մեջ փոխանցում ենք թե որտեղից ենք եկե
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
