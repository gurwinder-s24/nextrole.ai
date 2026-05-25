import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ProtectedRoute = () => {
  const { loading, isAuth } = useAppData();

  if (loading) return null;

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

export default ProtectedRoute;
