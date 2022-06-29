import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';



function Register(){
    let navigate = useNavigate();
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [cellular,setCellular] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');

/*    useEffect(() => {
        axios.get("http://localhost:8080/api/users/login").then(res => {
            console.log(res)
            navigate('http://localhost:8080/')
        }).catch(err => {
            console.log(err);
            //navigate('http://localhost:8080/api/users/login');
        })
    }, [])*/ //capire se serve o rimuovere

    const submit = () => {
        console.log(email,password)
        axios.post("http://localhost:8080/api/users/registration", {name,surname, cellular,email,password,role}).then(user =>{
            console.log(user);
            navigate("http://localhost:8080/api/users/login") //per fare il redirect sulla pagina di login
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div>
            <h1>Signup page</h1>
            <input type="name" name="name" placeholder="Enter your name" value={name} onChange={event => setName(event.target.value)} />
            <input type="surname" name="surname" placeholder="Enter your surname" value={surname} onChange={event => setSurname(event.target.value)} />
            <input type="tel" name="cellular" placeholder="Enter your phone number" value={cellular} onChange={event => setCellular(event.target.value)} />
            <input type="email" name="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
            <input type="password" name="password" placeholder="Enter password" value={password} onChange={event => setPassword(event.target.value)} />
            <label for="role_selection">Select your role:</label>
            <select id="role_selection" value={role} onChange={event => setRole(event.target.value)}>
                <option>customer</option>
                <option>admin</option>
            </select>
            <button onClick={submit}>Register</button>
        </div>
    )
}

export default Register
