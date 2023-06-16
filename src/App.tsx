import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { Routes } from 'routes/root';

const router = createBrowserRouter(Routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
