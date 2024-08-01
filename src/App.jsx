import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage'
import VideoPage from './components/VideoPage'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return(
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
