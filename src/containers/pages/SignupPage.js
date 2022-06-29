import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {post} from "../../services/Client";
import {USER} from "../../constants/rete";
import {initialValueUser} from "../../constants/User";
import {handleOnChange} from "../../services/helpers";


export default function SignupPage({onSubmit}) {
    let navigate = useNavigate();
    const [user, setUser] = useState(initialValueUser);
    /*    const [name,setName] = useState('');
        const [surname,setSurname] = useState('');
        const [cellular,setCellular] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [role,setRole] = useState('');*/

    /*const submit = () => {
        console.log(user.email, user.password)
        post([USER], {
            elem: "registration",
            body: {name: user.name, surname: user.surname, cellular: user.cellular, email:user.email, password: user.password, role: user.role}
        }).then(usr => {
            console.log(usr);
            navigate("/login") //per fare il redirect sulla pagina di login
        }).catch(err => {
            console.log(err);
            navigate('/registration'); //redirect sulla stessa pagina in caso non andasse a buon fine
        })
    }*/
    return (
        <div>
            <h1>Signup page</h1>
            <input type="name" name="name" placeholder="Enter your name" value={user.name || ''}
                   onChange={event => handleOnChange(event, "name", setUser)}/>
            <input type="surname" name="surname" placeholder="Enter your surname" value={user.surname || ''}
                   onChange={event => handleOnChange(event, "surname", setUser)}/>
            <input type="tel" name="cellular" placeholder="Enter your phone number" value={user.cellular || ''}
                   onChange={event => handleOnChange(event, "cellular", setUser)}/>
            <input type="email" name="email" placeholder="Enter email" value={user.email || ''}
                   onChange={event => handleOnChange(event, "email", setUser)}/>
            <input type="password" name="password" placeholder="Enter password" value={user.password || ''}
                   onChange={event => handleOnChange(event, "password", setUser)}/>
            <label for="role_selection">Select your role:</label>
            <select id="role_selection" value={user.role || ''} onChange={event => handleOnChange(event, "role", setUser)}>
                <option>customer</option>
                <option>admin</option>
            </select>
            <button onClick={() => onSubmit(user)}>Register</button>
        </div>
    )
}