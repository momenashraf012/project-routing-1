import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Ipros {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
  data: unknown;
}

const ProductedRoute = ({ isAllowed, redirectPath, children, data }: Ipros) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} state={data} />;
  }

  return children;
};

export default ProductedRoute;
