import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
    element: <Main></Main>,
    children: [
      {path: 'topics', element: <Header></Header>},
      {path: 'statistics', element: <Statistics></Statistics>},
      {path: 'blog', element: <Blog></Blog>}
    ] 
  }
  ])
  return (
    <div className="App bg-green-300">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
