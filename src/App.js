import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Cards from './components/Cards/Cards';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HeroSection from './components/HeroSection/HeroSection';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
    element: <Main></Main>,
    children: [
      {path: '/', element: <HeroSection></HeroSection>},
      {path: '/home', element: <HeroSection></HeroSection>},
      { path: 'topics', element: <Cards></Cards>},
      {path: 'statistics', element: <Statistics></Statistics>},
      { path: 'blog', element: <Blog></Blog>},
      {
       path: '/quiz/:quizId',
       loader: async ({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
       },
       element: <Quiz></Quiz>
      },

    ] 
  },
     {path: '/*', element: <ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App bg-green-300">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
