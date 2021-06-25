import './App.css';
import LeftNav from './LeftNav';
import Dashboard from './Dashboard';
import Header from './Header';
import "./Responsive.css"

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app-content">
        <LeftNav username="adnan-mujagic"/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
