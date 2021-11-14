import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Booking from './pages/Booking/Booking';
import AllProducts from './pages/AllProducts/AllProducts'
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './pages/AddProduct/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>
            <Route path="/allproducts">
              <AllProducts />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
