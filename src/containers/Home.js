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
import './Cart.css';
import Show_cart from './displayCart';


function Home(props) {
  const [firestoreArray, setFirestoreArray] = useState([]);
  
  const db = database.firestore();

  const {AccountID} = props
  const [SellerID, setSellerID] = useState('');
  const [jump, setjump] = useState(false);
  const [jumpreflash, setjumpreflash] = useState (false);
  const [test, setTest] = useState('');
  const [run, setRun] = useState(true);
  const [cart, setCart] = useState(false);
  
  const [cartitem, setCartitem] = useState(0);

  if (AccountID != ""){
      if (run == true){
        const time_ = db.collection("users").doc(AccountID).update({
        jump: false
      });
      setRun(false)
    }

    db.collection("users").doc(AccountID).onSnapshot((doc) =>{
      if (doc.data().jump == true){
        setTest("data: true");
        setSellerID(doc.data().sellerID);
        setTimeout(() => {
          setjump(true);
        }, 500);
      }else 
        setTest("data: false")
      
     
      setCartitem(doc.data().shoppingcart)
      
    })
  }
  


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

  const handleJumpCart =()=>{
    setCart(true);
  }

  return (
    <div> 
      {cart? (
        <>
          <Show_cart 
            AccountID = {AccountID}
          />
        </>
      ):(
        <>
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
              <p>Test: {test}</p>
              <p>accountID:{AccountID}</p>
              <p>sellerID:{SellerID}</p>
            </div>

            <div className="cart">
              <button className="cart-link" onClick={handleJumpCart}>View Cart 🛒({cartitem})</button>
            </div>

            <div className="button">
              <button onClick={handleJump}> MySeller Page</button>
              <button onClick={handleReflash}> Reflash</button>
              <LinkContainer to="/">  
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
                  sellerID = {each.SellerID}
                  accountID = {AccountID}
                  quantity =  {each.Quantity}
                  />
                )}
              </CardColumns>
            </div>

            </div>
          </>
        )}
      </>
      )}      
    </div>
  );
}

export default Home
