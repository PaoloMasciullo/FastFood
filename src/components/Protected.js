/*
//questa serve solo di esempio per una route protetta
import React, {useEffect} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router';

function  Protected() {
    let navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get("http://localhost:8080/protected", {headers : {
            Authorization : token
            }}).then(res => {
                console.log(res)
        }).catch(err => {
            console.log(err);
            navigate('http://localhost:8080/api/users/login');
        })
    }, [])
    return(
        <div>
            <h1>Protected</h1>
        </div>
    )
}

export default Protected*/
