import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import AddFund from "./pages/AddFund";
import History from "./pages/History";
import Transactions from "./pages/Transactions";
import NewOrder from "./pages/NewOrder";
import AllOrders from "./pages/AllOrders";
import OrderRefill from "./pages/OrderRefill";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<Dashboard/>} />
        <Route path="/user/services" element={<Services/>} />
        <Route path="/user/funds" element={<AddFund/>} />
        <Route path="/user/history" element={<History/>} />
        <Route path="/user/transactions" element={<Transactions/>} />
        <Route path="/user/new-order" element={<NewOrder/>} />
        <Route path="/user/all-orders" element={<AllOrders/>} />
        <Route path="/user/order-refill" element={<OrderRefill/>} />
        <Route path="/user/drip-feed" element={<OrderRefill/>} />
        <Route path="/user/mass-order" element={<OrderRefill/>} />
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
