import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import Navbar from './components/Navbar'
// import Dashboard from './pages/Dashboard';
import Sanbox from './pages/Sanbox';
import io from 'socket.io-client'

const socket = io.connect('/')
function App() {
  return (
    <div className="App">
      <Sanbox socket={socket}/>
      {/* <Navbar/>
      <Dashboard/> */}
    </div>
  );
}

export default App;
