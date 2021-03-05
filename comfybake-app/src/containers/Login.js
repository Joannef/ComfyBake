import React, {useState, useEffect} from "react";
import database from '../firebase';
import Signup from "./Signup";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =() =>{
        database.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            setEmail("");
            setPassword("");
            //if email and password is currect, then jump to home page

        }).catch((err)=>{
            alert(err);
        });
    }

    const movetoSignup_ =(e) => {
        <LinkContainer to="/signup">
            </LinkContainer>
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <h1>Welcom </h1>
                <input type="text" required value={email}
                    placeholder = "Email"
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <input type="password" required value={password}
                    placeholder = "Password"
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>

                <button onClick={handleLogin}> Login </button><br/>

                <p>Don't have an account?</p>
                <button onClick={movetoSignup_}> Sign-up </button><br/>

            </div>
        </section>
    );
}

export default Login;

