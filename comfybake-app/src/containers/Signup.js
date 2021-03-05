import React, {useState} from "react";
import database from '../firebase';

const db = database.firestore();
const userCollection = db.collection("users");

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

    const handleSumbit = (e) =>{
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
                DairyFree:DairyFree,
                Kosher:Kosher,
                LactoseIntolerant:LactoseIntolerant,
                Peanut:Peanut,
                Almonds:Almonds,
                Milk:Milk,
                Soy:Soy,
                Egg:Egg,
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


               <button type="sumbit">Sign Up</button>
        </form>
    );
}

//export default Signup;