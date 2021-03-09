import React, {useState, useEffect} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setaccount] = useState(false);

    const handleLogin =() =>{
        database.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            setEmail("");
            setPassword("");
            //if email and password is currect, then jump to home page
            setaccount(true);
        }).catch((err)=>{
            alert(err);
            setaccount(false);
        });
    }

    return (
        <section className="login">
            <div className="loginContainer">
                {account?(
                    <>
                    <Home/>
                    </>
                ):(
                    <>
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
                    <LinkContainer to="/signup">   
                        <Nav.Link>
                            <button>Sign-up </button><br/>
                        </Nav.Link>
                        </LinkContainer>
                    </>
                )}
            </div>
        </section>
    );
}

export default Login;

