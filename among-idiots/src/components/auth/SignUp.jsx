import React from "react";
import { useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUp = (e)=> {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="signUp">
            <form onSubmit={SignUp}>
                <h1>Create Account</h1>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                    type="passwword" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button type="submit">Create Account</button>
            </form>
        </div>
    )
}
export default SignUp