import React, {useState, useEffect} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import SellerPage from './SellersPage';


const db = database.firestore();
const storage = database.storage();

const Display = (props) =>{
    
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [PhoneNum, setPhoneNum] = useState('');
    
    const [TestFirstName, setTestFirstName] = useState('');
    const [TestLastName, setTestLastName] = useState('');
    const [TestAddress, setTestAddress] = useState('');
    const [TestPhoneNum, setTestPhoneNum] = useState('');
    const [Size, setSize] = useState(0);

    const [TestBody, setTestBody] = useState("");
    const [TestFoodname, setTestFoodname] = useState("");
    const [TestImageUrl, setTestImageUrl] = useState();
    const [TestSize, setTestSize] = useState(0);
    
    const {AccountID} = props
    const [SellerID, setSellerID] = useState('');
    const [AccountMatch, setAccountMatch] = useState('');
    const [jump, setjump] = useState(false);
    
    const id = "user1@gmail.com";
    
    //method1
    class User{
        constructor(FirstName, LastName, Address, City, State, PhoneNumber){
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Address = Address;
            this.City = City;
            this.State = State;
            this.PhoneNumber = PhoneNumber;
        }
    }
    
    var userConverter = {
        fromFirestore: function(snapshot, options){
            const data = snapshot.data(options);
            return new User(data.personalinfo.FirstName, data.personalinfo.LastName,
                data.personalinfo.Address, data.personalinfo.City, 
                data.personalinfo.State, data.personalinfo.PhoneNumber);
        }
    }
    
    //var docRef = db.collection("FoodCollection").doc(id).collection("food").doc("Maple Sugar Scrolls");
    
    db.collection("users").doc(id)
    .withConverter(userConverter).get().then((doc) => {
        var user = doc.data();
        setLastName(user.LastName);
        setFirstName(user.FirstName);
        setPhoneNum(user.PhoneNumber);
        setAddress(user.Address + " " + user.City + " " + user.State)
    });

    //method2
    db.collection("users").get().then(querySnapshot =>{
        const data = querySnapshot.docs.map(doc=> doc.data());
    
        //console.log(data[0].personalinfo.FirstName);
        /*
        setTestFirstName(data[5].personalinfo.FirstName);
        setTestLastName(data[5].personalinfo.LastName);
        setTestPhoneNum(data[5].personalinfo.PhoneNumber);
        setTestAddress(data[5].personalinfo.Address + " " 
                        + data[5].personalinfo.City + " "
                        + data[5].personalinfo.State);
        */
       
       setSize(data.length);
       setHelperfunction(data[5]);
    })

    
    function setHelperfunction (data_1){
        setTestFirstName(data_1.personalinfo.FirstName);
        setTestLastName(data_1.personalinfo.LastName);
        setTestPhoneNum(data_1.personalinfo.PhoneNumber);
        setTestAddress(data_1.personalinfo.Address + " " 
                        + data_1.personalinfo.City + " "
                        + data_1.personalinfo.State); 
    }
    

    //method3
    db.collection("FoodCollection").doc(id).collection("food").get().then(querySnapshot =>{
        const data = querySnapshot.docs.map(doc=> doc.data());
        setTestSize(data.length);
        setHelperfunction_2(data[3]);
        
    })

    function setHelperfunction_2(data_2){
        setTestBody(data_2.Body);
        setTestFoodname(data_2.Foodname);
        setTestImageUrl(data_2.ImageUrl);
    }

    const [TestBody_, setTestBody_] = useState("");
    const [TestFoodname_, setTestFoodname_] = useState("");
    const [TestImageUrl_, setTestImageUrl_] = useState();
    const [size_seller, setSize_seller] = useState(0);
    //method4
    //db.collection("FoodCollection").get().then(querySnapshot =>{
    db.collectionGroup("food").get().then(querySnapshot =>{
        const data = querySnapshot.docs.map(doc=> doc.data());
        console.log(data);
        setSize_seller(data.length);
        setHelperfunction_3(data[1]);
    })

    function setHelperfunction_3(data_3){
        setTestBody_(data_3.Body);
        setTestFoodname_(data_3.Foodname);
        setTestImageUrl_(data_3.ImageUrl);
    }

    //delete document 
    db.collection("FoodCollection").doc("user2@gmail.com").collection("food").doc("2").delete();

    //update 
    db.collection("FoodCollection").doc("user5@gmail.com").collection("food").doc("t")
        .update({
            "Body": "changed"
    })

    //jump even 
    const handleJump =() =>{
        setjump(true);
    }

    //logout
    const handleLogout = () =>{
        setAccountMatch(AccountID==SellerID);
        setTimeout(() => {
            database.auth().signOut();
        }, 100);
    }
    
    return (
        <div> 
            {jump? (
                <>
                <SellerPage
                    AccountID = {AccountID}
                    SellerID = {SellerID}
                />
                </>
            ):(
                <>
                <br/>
                <br/>
                <br/>
                <p>AccountID:{AccountID}</p>
                <p>SellerID:{SellerID}</p>
                <br/>
                <input value={SellerID}
                    placeholder = "SellerID"
                    onChange={(e) => setSellerID(e.target.value)}
                /><br/>
                <button onClick={handleJump}> Jump</button>
                <br/>
                    <LinkContainer to="/login">  
                        <Nav.Link>
                            <button onClick={handleLogout}>Logout</button><br/>
                        </Nav.Link>
                    </LinkContainer>
                <br/>
                <p>method4</p>
                <p>count: {size_seller}</p>
                <p>Foodname: {TestFoodname_}</p>
                <p>Body: {TestBody_}</p>
                <p>ImageUrl: {TestImageUrl_}</p>
                <br/>
                <br/>
                <br/>
                <p>method1</p>
                <p>FirstName: {FirstName}</p>
                <p>LastName: {LastName}</p>
                <p>PhoneNumber: {PhoneNum}</p>
                <p>Address: {Address}</p>
                <br/>
                <br/>
                <br/>
                <p>method2</p>
                <p>TestFirstName: {TestFirstName}</p>
                <p>TestLastName: {TestLastName}</p>
                <p>TestPhoneNumber: {TestPhoneNum}</p>
                <p>TestAddress: {TestAddress}</p>
                <p>Size: {Size}</p>
                <br/>
                <br/>
                <br/>
                <p>method3</p>
                <p>Foodname: {TestFoodname}</p>
                <p>Body: {TestBody}</p>
                <p>ImageUrl: {TestImageUrl}</p>
                <p>Size: {TestSize}</p>
                </>
            )}
            
        </div>
    
    );
    

}

export default Display;
/*
        <div> 
            {jump? (
                <>
                <SellerPage
                    AccountID = {AccountID}
                    SellerID = {SellerID}
                />
                </>
            ):(
                <>
                </>
            )}
            
        </div>
*/