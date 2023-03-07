import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import About from './pages/About';
import CockTailPage from './pages/CockTailPage';
import ErrorPage from './pages/ErrorPage';
import Rootlayout from './pages/Rootlayout';
//COMPONENTS
const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/cocktail/:id', element: <CockTailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
