import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
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
import MyProfile from "./pages/MyProfile";
import MyReferral from "./pages/MyReferral";
import OpenTicket from "./pages/OpenTicket";
import ShowTicket from "./pages/ShowTicket";
import { useEffect } from "react";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  const { user, checkAuth, loading } = useAuthStore();

  useEffect(() => {
    checkAuth();
    console.log({ user });
  }, [checkAuth]);

  // Wait for authentication check before rendering routes
  if (loading) {
    return    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-700 text-sm font-medium">Loading, please wait...</p>
      </div>
    </div>;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={user ? <Navigate to={"/user/dashboard"} /> : <HomePage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={"/user/dashboard"} /> : <Register />}
        />
        <Route
          path="/user/dashboard"
          element={user ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/services"
          element={user ? <Services /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/funds"
          element={user ? <AddFund /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/history"
          element={user ? <History /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/transactions"
          element={user ? <Transactions /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/new-order"
          element={user ? <NewOrder /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/all-orders"
          element={user ? <AllOrders /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/order-refill"
          element={user ? <OrderRefill /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/drip-feed"
          element={user ? <OrderRefill /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/mass-order"
          element={user ? <OrderRefill /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/my-profile"
          element={user ? <MyProfile /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/my-referral"
          element={user ? <MyReferral /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/open-ticket"
          element={user ? <OpenTicket /> : <Navigate to={"/"} />}
        />
        <Route
          path="/user/show-ticket"
          element={user ? <ShowTicket /> : <Navigate to={"/"} />}
        />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
