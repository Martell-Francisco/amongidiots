import React from "react";
import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e)=> {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="signIn">
            <form onSubmit={signIn}>
                <h1>Login</h1>
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
                    <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default SignIn