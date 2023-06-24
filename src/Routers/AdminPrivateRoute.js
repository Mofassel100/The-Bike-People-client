import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AdminRole from '../Hooks/AdminRole';
const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = AdminRole(user?.email);
  const location = useLocation();
  if (loader || isAdminLoading) {
    return (
      <p className="text-center ">
        L<span className="animate-pulse bg-lime-600">o</span>aders
      </p>
    );
  }
  if (!user && isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default AdminRoute;
