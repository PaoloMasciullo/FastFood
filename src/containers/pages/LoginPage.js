import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router';



function Login(){
    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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

    const submit = () => {
        console.log(email,password)
        axios.post("http://localhost:8080/api/users/login", {email,password}).then(user =>{
            console.log(user);
            localStorage.setItem('token',user.data.token)
            localStorage.setItem('role',user.data.role)
            if (user.data.role === 'customer')
                axios.get("http://localhost:8080/api/users/customer").then(
                    () => navigate("http://localhost:8080/api/users/customer")) //per fare il redirect
            else if (user.data.role === 'admin')
                axios.get("http://localhost:8080/api/users/admin").then(()=>
                    navigate("http://localhost:8080/api/users/admin")).catch(err => {
                        console.log(err);
                        console.log("Accesso negato")
                })
        }).catch(err => {
            console.log(err);
            navigate('http://localhost:8080/api/users/login') //vedi se funziona il redirect alla login page
        })
    }
    return(
        <div>
            <h1>Login page</h1>
            <input type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={submit}>Login</button>
        </div>
    )
}

export default Login
