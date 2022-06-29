import './style/App.css';
import React, {useContext, useEffect, useState} from 'react';
import Main from "./containers/Main.js";
import {Route, Routes} from "react-router-dom";
import SignupPage from "./containers/pages/SignupPage.js";
import LoginPage from "./containers/pages/LoginPage.js";
import {USER} from "./constants/rete";
import {post, get} from "./services/Client";

import {Navigate, useNavigate} from 'react-router';
export const AuthContext = React.createContext({});
export default function App() {

    let navigate = useNavigate();

    const [usr, setUsr] = useState({isLogged: false})

    useEffect(() => {
        refreshUser(usr, setUsr)
    }, [])

    function login(user) {
        console.log(user.email, user.password) //just for debug
        post([USER], {elem: 'login', body: {email: user.email, password: user.password}}).then(user => {
            console.log(user); //just for debug
            localStorage.setItem('token', user.data.token);
            localStorage.setItem('role', user.data.role);
            localStorage.setItem('uId', user.data.id);
            setUsr({isLogged: true});
            const token = user.data.token;
            if (user.data.role === 'customer')
                get([USER], {elem: 'customer'}).then(
                    () => navigate("/menu")) //per fare il redirect
            else if (user.data.role === 'admin')
                get([USER], {elem: 'admin'}).then(() =>
                    navigate("/menu")).catch(err => {
                    console.log(err);
                    console.log("Accesso negato")
                })
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    }

    function signup(user) {
        console.log(user.email, user.password)
        post([USER], {
            elem: "registration",
            body: {
                name: user.name,
                surname: user.surname,
                cellular: user.cellular,
                email: user.email,
                password: user.password,
                role: user.role
            }
        }).then(usr => {
            console.log(usr);
            navigate("/login") //per fare il redirect sulla pagina di login
        }).catch(err => {
            console.log(err);
            navigate('/registration'); //redirect sulla stessa pagina in caso non andasse a buon fine
        })
    }

    function logout() {
        setUsr({isLogged: false});
        localStorage.removeItem('token');
        localStorage.removeItem('uId');
        localStorage.removeItem('role');
    }

    function refreshUser(usr, setUsr){
        if (localStorage.getItem('uId') && localStorage.getItem('token')){
            setUsr({isLogged: true});
        }
        else {
            setUsr({isLogged: false});
        }
    }

    return (
        <div className="App">
            <AuthContext.Provider value={usr}>
                <Routes>
                    <Route path='/login' element={<UnloggedRoute><LoginPage onSubmit={login}/></UnloggedRoute>}/>
                    <Route path='/signup' element={<UnloggedRoute><SignupPage onSubmit={signup}/></UnloggedRoute>}/>
                    <Route path='*' element={<LoggedRoute><Main logout={logout}/></LoggedRoute>}/>
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

function UnloggedRoute({children}) {
    let usr = useContext(AuthContext) || {};
    return (
        usr.isLogged ?
            <Navigate to={'/'}/>
            :
            children
    );
}

function LoggedRoute({children}) {
    let usr = useContext(AuthContext) || {};
    return (
        usr.isLogged ?
            children
            :
            <Navigate to={'/login'}/>
    );
}

