import React, {useEffect, useState} from "react"
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css'
import database from '../firebase';
import "./Home.css";
import LoadCards from './LoadCards'
// import Cart from "./Cart"
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import SellerPage from './SellersPage'; 
import Transfer from './Transfer';

function Home(props) {
  const [firestoreArray, setFirestoreArray] = useState([]);
  
  const db = database.firestore();
  ///const id = "user2@gmail.com";

  const {AccountID} = props
  const [SellerID, setSellerID] = useState('');
  const [AccountMatch, setAccountMatch] = useState('');
  const [jump, setjump] = useState(false);
  const [jumpreflash, setjumpreflash] = useState (false);
  useEffect(() => {
        
    db.collectionGroup("food").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        setFirestoreArray(data);
    })
  }, [])

  // useEffect(() => {
        
  //   db.collection("FoodCollection").get().then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc);
  //       });
  //       // console.log(data);
  //       // setFirestoreArray(data);
  //   });
  // }, [])


  //jump even 
  const handleJump =() =>{
      setSellerID(AccountID);
      setTimeout(() => {
          setAccountMatch(AccountID==SellerID);
          setjump(true);
      }, 500);
  }

  //logout
  const handleLogout = () =>{
      setTimeout(() => {
          database.auth().signOut();
      }, 100);
  }

  //reflash
  const handleReflash =()=>{
    setjump(true);
    setjumpreflash(true);
  }

  return (
    <div> 
      {jump? (
        <>
        <div>
          {jumpreflash?(
            <>
            <Transfer
              AccountID = {AccountID}
              SellerID = {SellerID}
              reflash = {false} 
            />
            </>
          ):(
            <>
            <SellerPage
            AccountID = {AccountID}
            SellerID = {SellerID}
            />
            </>
          )}
          </div>
        </>
      ):(
        <>
          <div className="Home">

          {/* <Cart />*/ }
          <div className="lander">
            <h1>ComfyBake</h1>
          </div>
          
          <div className="button">
            <button onClick={handleJump}> MySeller Page</button>
            <button onClick={handleReflash}> Reflash</button>
            <LinkContainer to="/login">  
              <Nav.Link>
                <button onClick={handleLogout}>Logout</button><br/>
              </Nav.Link>
            </LinkContainer>
            <br/>
          </div>

          <div className="content">
            <CardColumns>
              {firestoreArray.map(each => <LoadCards key={each.Foodname}
                                                
                title= {each.Foodname}
                imageURL= {each.ImageUrl}
                body= {each.Body}
                price= {each.Price}
                ingredients= {each.Ingredients}
                SellerID = {each.SellerId}
                />
              )}
            </CardColumns>
          </div>

          </div>
        </>
      )}      
    </div>
  );
}

export default Home
