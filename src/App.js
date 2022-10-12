import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Cards from './components/Cards/Cards';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
    element: <Main></Main>,
    children: [
      {
        path: 'topics', 
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Cards></Cards>},
      {path: 'statistics', element: <Statistics></Statistics>},
      { path: 'blog', element: <Blog></Blog>},
      {
       path: '/quiz/:quizId',
       loader: async ({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
       },
       element: <Quiz></Quiz>
      }
      // {path: 'home', element: <Header></Header>}


    ] 
  },
     {path: '*', element: <ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App bg-green-300">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
