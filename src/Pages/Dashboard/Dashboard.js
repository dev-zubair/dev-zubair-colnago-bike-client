// import { useState } from 'react';
import './Dashboard.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import useFirebase from '../../Hooks/useFirebase.js';
import MyOrder from './MyOrder.js';
import Payment from './Payment.js';
import Reviews from './Reviews.js';
import ManageAllOrder from './ManageAllOrder.js';
import MakeAdmin from './MakeAdmin.js';
import AddProduct from './AddProduct.js';
import useAuth from '../../Hooks/useAuth.js';


const Dashboard = () => {
      let { path, url } = useRouteMatch();
  // const { user } = useFirebase();
  const { allContexts } = useAuth();
  const { logOut } = allContexts;
  
    return (
        <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>User Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">My Order</li>
              </Link>

              <Link to={`${url}/payment`}>
                <li className="dashboard-menu">Payment</li>
              </Link>

              <Link to={`${url}/reviews`}>
                <li className="dashboard-menu">Reviews</li>
                </Link>
                
              <div className="admin-dashboard">
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add A Product</li>
                  </Link>
                
                {/* {isAdmi && (
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add A Product</li>
                  </Link>
                )} */}
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/ManageAllOrder`}>
                  <li className="dashboard-menu">Manage All Orders</li>
                  </Link>
                  
                  <button onClick={logOut} className="btn-style mt-5">
                      Sign Out
                    </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/reviews`}>
                <Reviews></Reviews>
              </Route>
              <Route exact path={`${path}/ManageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </Route>
              
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;