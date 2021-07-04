import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Import Custom Components here:
import LeftNav from '../LeftNav/LeftNav';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import StoreProfile from '../StoreProfile/StoreProfile';
import "../../Responsive.css"
import React from 'react';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div>
        <Header />
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
        </Switch>
        <Switch>
          <Route path="/dashboard">
            <div className="app-content">
              <LeftNav/>
              <Dashboard />
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path="/user/:id" children ={<UserProfile />}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/store/:id" children ={<StoreProfile />}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
