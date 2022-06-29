import './style/App.css';
import Main from "./containers/Main.js";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './containers/pages/LoginPage.js'
import Register from './containers/pages/SignupPage.js'
import Protected from './components/Protected.js'

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/api/users/login' element={<Login />} />
                <Route path='/protected' element={<Protected />} />
                <Route path='/home' element={<Main />} /> <!-- questa in realtà è la dashboard admin -->
                <Route path='/api/users/registration' element={<Register />} />
                <Route path='/api/users/customer' element={<pagina per ordinare />} />
                <Route path='/api/users/admin' element={<pagina per gestire menu e transazioni />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

