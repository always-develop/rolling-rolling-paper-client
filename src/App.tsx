import ModalTest from 'components/ModalTest';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import CommonLayout from 'views/layouts/CommonLayout';
import ClearLayout from 'views/layouts/ClearLayout';
import Home from 'views/Home';
import Login from 'views/Login';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <ClearLayout />,
    // errorElement: </>
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <CommonLayout />,
    // errorElement: </>
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
