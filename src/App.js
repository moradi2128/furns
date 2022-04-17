import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// === Components ===
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// === Pages ===
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
