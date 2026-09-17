import { createBrowserRouter } from 'react-router';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "movies",
            Component: Movies
        }
    ]
  },
]);