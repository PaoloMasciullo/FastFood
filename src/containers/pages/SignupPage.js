import React, {useState, useEffect} from 'react';
import {initialValueUser} from "../../constants/User";
import {handleOnChange} from "../../services/helpers";


export default function SignupPage({onSubmit}) {
    const [user, setUser] = useState(initialValueUser);
    return (
        <div className="container modalContainer">
            <div className=" modal login">
                <h1>Signup page</h1>
                <input type="name" className="input" name="name" placeholder="Enter your name" value={user.name || ''}
                       onChange={event => handleOnChange(event, "name", setUser)}/>
                <input type="surname" className="input" name="surname" placeholder="Enter your surname" value={user.surname || ''}
                       onChange={event => handleOnChange(event, "surname", setUser)}/>
                <input type="tel" className="input" name="cellular" placeholder="Enter your phone number" value={user.cellular || ''}
                       onChange={event => handleOnChange(event, "cellular", setUser)}/>
                <input type="email" className="input" name="email" placeholder="Enter email" value={user.email || ''}
                       onChange={event => handleOnChange(event, "email", setUser)}/>
                <input type="password" className="input" name="password" placeholder="Enter password" value={user.password || ''}
                       onChange={event => handleOnChange(event, "password", setUser)}/>
                <label for="role_selection">Select your role:</label>
                <select id="role_selection" className="input" value={user.role || ''}
                        onChange={event => handleOnChange(event, "role", setUser)}>
                    <option>customer</option>
                    <option>admin</option>
                </select>
                <button className="button" onClick={() => onSubmit(user)}>Register</button>
            </div>
        </div>
    )
}