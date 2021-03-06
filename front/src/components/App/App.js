import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Import Custom Components here:
import LeftNav from '../LeftNav/LeftNav';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import StoreProfile from '../StoreProfile/StoreProfile';
import EditProfile from '../EditProfile/EditProfile';
import "../../Responsive.css"
import React from 'react';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div>
        <Login setToken={setToken} />
      </div>
    );
  }
  
  return (
    <div className="app">
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/dashboard">
            <div className="app-content">
              <LeftNav/>
              <Dashboard />
            </div>
          </Route>
          <Route exact path="/user/:id" children ={<UserProfile />}>
          </Route>
          <Route path="/store/:id" children ={<StoreProfile />}>
          </Route>
          <Route path="/user/:id/edit" children ={<EditProfile />}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
