import React, {useState} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
// import BorderWrapper from 'react-border-wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signup.css";

const db = database.firestore();
const userCollection = db.collection("users");
const senderEmail = "cbakeTeam@gmail.com";
const templateId = "template_j303hv9";


export default function Signup() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [PhoneNum, setPhoneNum] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Vegan, setVegan] = useState(false);
    const [GlutenFree, setGlutenFree] = useState(false);
    const [DairyFree, setDairyFree] = useState(false);
    const [Kosher, setKosher] = useState(false);
    const [LactoseIntolerant, setLactoseIntolerant] = useState(false);
    const [Peanut, setPeanut] = useState(false);
    const [Almonds, setAlmonds] = useState(false);
    const [Milk, setMilk] = useState(false);
    const [Soy, setSoy] = useState(false);
    const [Egg, setEgg] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

    const [signup, setsignup] = useState(false);

    const handleSumbit = (e) =>{
        sendFeedback({
            templateId,
            senderEmail,
            receiverEmail:Email,
            FirstName,
            LastName,
          })
        setFormSubmitted(true)
        e.preventDefault();

        database.auth().createUserWithEmailAndPassword(Email,Password)
        .then(()=>{
            setsignup(true);

            userCollection.doc(Email).set({
                personalinfo: {
                    FirstName:FirstName,
                    LastName:LastName,
                    Address:Address,
                    City:City,
                    State:State,
                    PhoneNumber:PhoneNum
                },
                DietaryPreferences: {
                    Vegan:Vegan,
                    GlutenFree:GlutenFree,
                    DairyFree:DairyFree,
                    Kosher:Kosher,
                    LactoseIntolerant:LactoseIntolerant
                },
                Allergies:{
                    eanut:Peanut,
                    Almonds:Almonds,
                    Milk:Milk,
                    Soy:Soy,
                    Egg:Egg
                },
                shoppingcart: 0,
                jump: false
            }).then(()=>{
                alert("Look out for an email confirming your account!")
            }).catch((err)=>{
                alert(err.message);
            });
    
            setFirstName("");
            setLastName("");
            setAddress("");
            setCity("");
            setState("");
            setPhoneNum("");
            setEmail("");
            setPassword("");

        }).catch((err)=>{
            setsignup(false);
            alert(err);
        });
        
    }
    const sendFeedback = ({
        templateId,
        senderEmail,
        receiverEmail,
        FirstName,
        LastName,
      }) => {
        window.emailjs
          .send(
            "default_service",
            templateId,
            {
              senderEmail,
              receiverEmail,
              FirstName,
              LastName,
            },
          )
          .then(res => {
            if (res.status === 200) {
              setFormSubmitSuccessful(true)
            }
          })
          // Handle errors here however you like
          .catch(err => console.error("Failed to send feedback. Error: ", err))
      }

    return (
        <section className="login">
            <div className="loginContainer">
                {signup? (
                    <>
                    <br/>
                    <br/>
                    <br/>
                    <div className="transition">
                        <p className="customP">Press continue to go to the login page</p>
                        <LinkContainer to="/">   
                            <Nav.Link>
                                <button className="customButton"> Continue</button><br/>
                            </Nav.Link>
                        </LinkContainer>
                    </div>
                    </>
                    ):(
                    <>
                    <div className="form">
                        <form className="Signup-form" onSubmit={handleSumbit}>
                        <h1 className="customh1">Let's Get to Know one Another!</h1>
                        {/* <BorderWrapper> */}
                        <div>
                            <label>Introductions</label><br/>
                            <input type="text" required value={FirstName}
                                placeholder = "FirstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            /><b/> <b/>
                            <input type="text" required value={LastName}
                                placeholder = "LastName"
                                onChange={(e) => setLastName(e.target.value)}
                            /><br/>
                        </div>
                
                        <div> 
                            <label>Address</label><br/>
                            <input type="text" required value={Address}
                                placeholder = "Address"
                                onChange = {(e) => setAddress(e.target.value)}
                            /><br/>
                            <input type="text" required value={City}
                                placeholder = "City"
                                onChange = {(e) => setCity(e.target.value)}
                            /><b/> <b/>
                            <input type="text" required value={State}
                                placeholder = "State"
                                onChange = {(e) => setState(e.target.value)}
                            /><br/>
                        </div>

                        <div> 
                            <label>Contact</label><br/>
                            <input type="text" required value={PhoneNum}
                                placeholder = "Phone Number"
                                onChange = {(e) => setPhoneNum(e.target.value)}
                            /><br/>
                            <input type="text" required value={Email}
                                placeholder = "Email"
                                onChange = {(e) => setEmail(e.target.value)}
                            /><br/>
                            <input type="password" required value={Password}
                                placeholder = "Password"
                                onChange = {(e) => setPassword(e.target.value)}
                            /><br/>
                        </div>

                        <div> 
                            <label>Dietary Preferences</label><br/>
                            <input type="checkbox"   value={Vegan}
                                onClick={()=> setVegan(!Vegan)}
                            /> Vegan <br/>
                            <input type="checkbox"  value={GlutenFree}
                                onClick={()=> setGlutenFree(!GlutenFree)}
                            /> Gluen Free<br/>
                            <input type="checkbox"  value={DairyFree}
                                onClick={()=> setDairyFree(!DairyFree)}
                            /> Dairy Free<br/>
                            <input type="checkbox"  value={Kosher}
                                onClick={()=> setKosher(!Kosher)}
                            /> Kosher<br/>
                            <input type="checkbox"  value={LactoseIntolerant}
                                onClick={()=> setLactoseIntolerant(!LactoseIntolerant)}
                            /> Lactose Intolerant<br/>
                        </div>

                        <div> 
                            <label>Allergies</label><br/>
                            <input type="checkbox"   value={Peanut}
                                onClick={()=> setPeanut(!Peanut)}
                            /> Peanut <br/>
                            <input type="checkbox"  value={Almonds}
                                onClick={()=> setAlmonds(!Almonds)}
                            /> Almonds<br/>
                            <input type="checkbox"  value={Milk}
                                onClick={()=> setMilk(!Milk)}
                            /> Milk<br/>
                            <input type="checkbox"  value={Soy}
                                onClick={()=> setSoy(!Soy)}
                            /> Soy<br/>
                            <input type="checkbox"  value={Egg}
                                onClick={()=> setEgg(!Egg)}
                            /> Egg<br/>
                        </div>
                        <button classname="center customButton" type="submit">Sign Up</button>
                        
                        
                        <LinkContainer to="/">   
                            <Nav.Link>
                            <button2>Sign in instead</button2><br/>
                            </Nav.Link>
                        </LinkContainer>
                        {/* </BorderWrapper> */}
                        </form>
                        </div>
                        </>
                )}
                    </div>
        </section>   
    );
}

//export default Signup;
