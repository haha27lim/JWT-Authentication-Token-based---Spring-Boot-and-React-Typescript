import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Home from "./components/home.component";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import { Header } from './components/Layout/Header';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
