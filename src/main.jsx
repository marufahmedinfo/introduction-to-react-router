import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Feture from './components/Feture/Feture.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
// import Post from './components/Post/Post.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Hello word!</h1>
//   },
//   {
//     path: "/about",
//     element: <h1>I am this About section</h1>
//   },
//   {
//     path: '/contact',
//     element: <h2>Call me right Now</h2>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/feture',
        element: <Feture></Feture>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
    
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
