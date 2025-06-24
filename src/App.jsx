import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Layout from "./Layout";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
