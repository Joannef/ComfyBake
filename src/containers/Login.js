import React, {useState, useEffect} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import Home from "./Home";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setaccount] = useState(false);
    const [AccountID, setAccountID] = useState('');

    const handleLogin =() =>{
        database.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            setAccountID(email);
            setEmail("");
            setPassword("");
            //if email and password is currect, then jump to home page
            setTimeout(() => {
                setaccount(true);
            }, 200);

        }).catch((err)=>{
            alert(err);
            setaccount(false);
        });
    }
    
    const authListener = () =>{
        database.auth().onAuthStateChanged(account => {
            if (account==true) {
                setaccount(true);
            }else{
                setaccount(false);
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <section className="login">
            <div className="loginContainer">
                {account?(
                    <>
                    <br/>
                    <br/>
                    <Home 
                        AccountID = {AccountID}
                    />
                    </>
                ):(
                    <>
                    <div class="form">
                    <h1 className="customh1">Welcome</h1>
                    {/* <BorderWrapper> */}
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
                    {/* </BorderWrapper> */}
                    </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Login;

