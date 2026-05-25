import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './guards/protectedRoute';
import { useAppData } from './context/AppContext';
import PublicRoute from './guards/publicRoute';
import Footer from './components/footer';
import Navbar from './components/navbar';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import Analyse from './pages/Analyse';
import Loading from './components/loading';
import JobMatcher from './pages/JobMatcher';
import InterviewPrep from './pages/Interview';
import BuildResumePage from './pages/BuildResume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='flex flex-col min-h-screen w-full'>
      <Navbar />
      <Home />
      <Footer />
    </div>,
  },
  
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/analyse',
        element: <Analyse />
      },
      {
        path: '/jobmatcher',
        element: <JobMatcher />
      },
      {
        path: '/interviewprep',
        element: <InterviewPrep />
      },
      {
        path: '/resumebuilder',
        element: <BuildResumePage />
      },
    ]
  },

  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },

  {
    path: "*",
    element:
    <div>
      <NotFound />
    </div>,
  }

]);

const App = () => {
  const { loading } = useAppData();

  if (loading) {
    return <Loading />;
  }
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App