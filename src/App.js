import './App.css';
import Home from './routes/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HowToMake from './routes/how-to-make';
import Make from './routes/make';
import Profile from './routes/profile';
import CreateAccount from './routes/login';
import Game from './routes/game';
import Layout from './routes/layout';



const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path:"/how-to-make",
        element: <HowToMake />
      }
    ]
  },
  {
    path:"/how-to-make",
    element: <HowToMake />
  },
  {
    path:"/make",
    element: <Make />
  },
  {
    path:"/profile",
    element: <Profile />
  },
  {
    path:"/login",
    element: <CreateAccount />
  },
  {
    path:"/game",
    element: <Game />
  }
  
])

function App() {
  return (
    <RouterProvider router = {router} />
    
  )
}

export default App;
