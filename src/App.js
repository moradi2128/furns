import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// === Components ===
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ModalQuickView from "./components/ModalQuickView/ModalQuickView";
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
import Compare from "./pages/Compare/Compare";
import NotFound from "./pages/404/NotFound";

function App() {
  const { status } = useSelector((state) => state.quickView);
  return (
    <>
      <Router>
        <ToastContainer />
        <ScrollToTop />
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
          <Route path="/compare" component={Compare} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
          <Route  component={NotFound} />
        </Switch>
        <Footer />
        {status && <ModalQuickView />}
      </Router>
    </>
  );
}

export default App;
