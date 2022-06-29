import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router';
import {USER} from "../../constants/rete";
import {initialValueUser} from "../../constants/User";
import {handleOnChange} from "../../services/helpers";



 export default function LoginPage({onSubmit}){
    let navigate = useNavigate();
    const [user, setUser] = useState(initialValueUser);
    /*const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');*/

/*    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get("http://localhost:8080/protected", {headers : {
                Authorization : token
            }}).then(res => {
            console.log(res)
            navigate('http://localhost:8080/protected')
        }).catch(err => {
            console.log(err);
            navigate(''); //capire se così ritorna su loginPage
        })
    }, [])*/ //troppo complicato forse meglio evitare

/*    const submit = () => {
        console.log(user.email,user.password) //just for debug
        post([USER], {elem: 'login', body: {email: user.email,password: user.password}}).then(user =>{
            console.log(user); //just for debug
            localStorage.setItem('token',user.data.token)
            localStorage.setItem('role',user.data.role)
            const token = user.data.token;
            if (user.data.role === 'customer')
                get([USER], {elem:'customer'}).then(
                    () => navigate("/menu")) //per fare il redirect
            else if (user.data.role === 'admin')
                get([USER], {elem:'admin'}).then(()=>
                    navigate("/admin")).catch(err => {
                        console.log(err);
                        console.log("Accesso negato")
                })
        }).catch(err => {
            console.log(err);
            navigate('/login') //vedi se funziona il redirect alla login page
        })
    }*/

    return(
        <div>
            <h1>Login page</h1>
            <input type="email" placeholder="Enter email" value={user.email || ''} onChange={event => handleOnChange(event, "email", setUser)} />
            <input type="password" placeholder="Enter password" value={user.password || ''} onChange={event => handleOnChange(event, "password", setUser)} />
            <button onClick={() => onSubmit(user)}>Login</button>
        </div>
    )
}