import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
