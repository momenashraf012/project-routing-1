import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Ipros {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
}

const ProductedRoute = ({ isAllowed, redirectPath, children }: Ipros) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProductedRoute;
