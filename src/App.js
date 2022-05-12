import './App.css'
import {Dashboard} from './components/Dashboard';
import {Issues} from './components/Issues';
import {Create} from './components/Create';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/issues" element={<Issues/>}/>
          <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
