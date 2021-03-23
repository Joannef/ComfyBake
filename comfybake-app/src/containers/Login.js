import React, {useState, useEffect} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import BorderWrapper from 'react-border-wrapper'

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
                    <br/>
                    <br/>
                    <div className="transition">
                        <p className="customP">Press Continue to go to the Home Page</p>
                        <LinkContainer to="/">   
                            <Nav.Link>
                                <button className="customButton">Continue</button><br/>
                            </Nav.Link>
                        </LinkContainer>
                    </div>
                    </>
                ):(
                    <>
                    <br/>
                    <br/>
                    <div class="form">
                    <p className="customP">Welcome</p>
                    <BorderWrapper>
                    <input type="text" required value={email}
                        placeholder = "Email"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    
                    <input type="password" required value={password}
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>

                    <button1 onClick={handleLogin}>Login</button1><br/> 

                    <p2>Don't have an account?</p2>
                    <LinkContainer to="/signup">   
                        <Nav.Link>
                            <button2>Sign-up</button2><br/>
                        </Nav.Link>
                    </LinkContainer>
                    </BorderWrapper>
                    </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Login;

