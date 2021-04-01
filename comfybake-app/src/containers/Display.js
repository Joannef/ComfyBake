import React, {useState, useEffect} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import {NavLink as Link} from "react-router-dom";


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

    const {ID} = props
    const id = "user1@gmail.com";
        
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
       setHelperfunction(data[10]);
    })

    function setHelperfunction (data_){
        setTestFirstName(data_.personalinfo.FirstName);
        setTestLastName(data_.personalinfo.LastName);
        setTestPhoneNum(data_.personalinfo.PhoneNumber);
        setTestAddress(data_.personalinfo.Address + " " 
                        + data_.personalinfo.City + " "
                        + data_.personalinfo.State); 
    }
    
    return (
        <div> 
            <br/>
            <br/>
            <br/>
            <p>FirstName: {FirstName}</p>
            <p>LastName: {LastName}</p>
            <p>PhoneNumber: {PhoneNum}</p>
            <p>Address: {Address}</p>
            <br/>
            <br/>
            <br/>
            <p>TestFirstName: {TestFirstName}</p>
            <p>TestLastName: {TestLastName}</p>
            <p>TestPhoneNumber: {TestPhoneNum}</p>
            <p>TestAddress: {TestAddress}</p>
            <p>Size: {Size}</p>
        </div>
    
    );

}

export default Display;