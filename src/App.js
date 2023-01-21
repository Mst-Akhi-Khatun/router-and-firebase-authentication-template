
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Register from './Register/Register';
import Login from './Login/Login';
import Users from './Users/Users';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      // {
      //   path: "/",
      //   element: <Register></Register>
      // },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/users",
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
  },])
function App() {
  return (
    <div className="">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
