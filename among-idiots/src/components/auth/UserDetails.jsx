import { onAuthStateChanged, signOut } from "firebase/auth";
import React, {useEffect, useState} from "react";
import { auth } from "../../firebaseConfig";
import Planner from "../Planner";
import SignIn from "./SignIn";

const UserDetails = () =>{
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });
        return () =>{
            listen();
        }
    },[]);
    const userSignOut = () =>{
        signOut(auth).then(() => {
            console.log('Sign Out Successfull')
        }).catch(error => console.log(error))
    }

    return(
        <div style={{color:"white"}}>
            {
                authUser ? <><Planner user={authUser}/>
                <button onClick={userSignOut}>sign out</button></>
                 : <SignIn/>
            }
        </div>
    );
}
export default UserDetails