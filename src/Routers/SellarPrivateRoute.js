import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import SellarRole from '../Hooks/SellarRoles';
import { AuthContext } from '../AuthProvider/AuthProvider';
const SellarPrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isSEllar, setSEllarLoading] = SellarRole(user?.email);
  const location = useLocation();
  if (loader || setSEllarLoading) {
    return (
      <p className="text-center ">
        L<span className="animate-pulse bg-lime-600">o</span>aders
      </p>
    );
  }
  if (!user && isSEllar) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default SellarPrivateRoute;
