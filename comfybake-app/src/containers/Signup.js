import React, {useState} from "react";
import database from '../firebase';

const db = database.firestore();
const userCollection = db.collection("users");
const senderEmail = "sender@example.com"
const templateId = "template_j303hv9"
const user = "user_y3r1u0JY8muNaWc5wZVZk"

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
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

    const handleSumbit = (e) =>{
        setFeedback("")
        sendFeedback({
            templateId,
            senderEmail,
            Email,
            feedback,
            user,
          })
        setFormSubmitted(true)
        e.preventDefault();

        database.auth().createUserWithEmailAndPassword(Email,Password)
        .then(()=>{
            userCollection.doc(Email).set({
                FirstName:FirstName,
                LastName:LastName,
                Address:Address,
                City:City,
                State:State,
                PhoneNumber:PhoneNum,
                Vegan:Vegan,
                GlutenFree:GlutenFree,
            }).then(()=>{
                alert("Account has been created")
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
                alert(err);
        });
        
    }
    const sendFeedback = ({
        templateId,
        senderEmail,
        receiverEmail,
        feedback,
        user,
      }) => {
        window.emailjs
          .send(
            "default_service",
            templateId,
            {
              senderEmail,
              receiverEmail,
              feedback,
            },
            user
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
        <form className="Signup-form" onSubmit={handleSumbit}>
                <h2 class="center"> Let's get to Know one another!</h2>

                <div>
                    <label>Introductions </label><br/>
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
                   <label> Address</label><br/>
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
               </div>

               <button type="sumbit">Sign Up</button>
        </form>
    );
}

//export default Signup;