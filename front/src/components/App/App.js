import './App.css';
import LeftNav from '../LeftNav/LeftNav';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import "../../Responsive.css"

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
