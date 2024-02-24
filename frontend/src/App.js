import {BrowserRouter , link ,Routes ,Route} from "react-router-dom";
import './App.css';
import Home from './component/home/home';
import Login from './component/login/login';
import Register from './component/register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
