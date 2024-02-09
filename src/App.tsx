import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home } from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />),
);

export const App = () => {
  return <RouterProvider router={router} />;
};
