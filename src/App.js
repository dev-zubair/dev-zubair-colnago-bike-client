import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Pages/Contact/Contact.js';
import Header from './Pages/Shared/Header/Header.js';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.js';
import Login from './Pages/Login/Login.js';
import SignUp from './Pages/Signup/Signup.js';
import Footer from './Pages/Shared/Footer/Footer.js';
import AuthProvider from './Context/AuthProvider.js';
import Home from './Pages/Home/Home.js';
import Products from './Pages/Home/Products/Products.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute.js';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
        
            <Route exact path="/">
            <Home />
          </Route>
        
            <Route path="/home">
            <Home />
          </Route>
        
            {/* <PrivateRoute path="/products">
            <Products />
            </PrivateRoute> */}
            
            <Route path="/products">
            <Products />
            </Route>
            
            <Route path="/dashboard">
            <Dashboard />
          </Route>
        
            <Route path="/contact">
            <Contact />
            </Route>
        
            <Route exact path="/signin">
             <Login />
            </Route>
        
            <Route path="/signup">
              <SignUp />
            </Route>
        
            <Route path="*">
            <NotFoundPage />
          </Route>
        
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
