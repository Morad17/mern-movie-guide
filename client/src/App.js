import {BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/freeComponent" element={<FreeComponent />} />
          <Route element={<ProtectedRoutes />} >
            <Route exact path="/authComponent" element={<AuthComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
