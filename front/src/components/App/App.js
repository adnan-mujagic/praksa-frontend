import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Login from '../Login/Login';
import "../../Responsive.css"
import React from 'react';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/dashboard">
            <Header></Header>
            <div className="app-content">
              <LeftNav username="adnan-mujagic"/>
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
