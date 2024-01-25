import React from "react";
import { useState } from "react";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth} from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
  

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const SignUp = (e)=> {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            updateProfile(auth.currentUser, {
                displayName: username
              }).then(() => {
                console.log("profile updated")
                navigate("../")

              }).catch((error) => {
                console.log(error.message)
              });
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="signUp">
            <form onSubmit={SignUp}>
                <h1>Create Account</h1>
                <input 
                    type="username" 
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                    type="password" 
                    name="password"
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