import React, {useEffect, useState} from "react"
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css'
import database from '../firebase';
import "./Home.css";
import LoadCards from './LoadCards'
//import Cart from "./Cart"

function Home() {
  const [firestoreArray, setFirestoreArray] = useState([]);
  
  const db = database.firestore();
  const id = "user2@gmail.com";

  useEffect(() => {
        
    db.collection("FoodCollection").doc(id).collection("food").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        setFirestoreArray(data);
    })

}, [])

  return (
    <div className="Home">
      {/*<Cart />*/}
      <div className="lander">
        <h1>ComfyBake</h1>
      </div>
      <div className="content">
        <CardColumns>
          {firestoreArray.map(each => <LoadCards key={each.Foodname}
                                            
            title= {each.Foodname}
            imageURL= {each.ImageUrl}
            body= {each.Body}
            price= {each.Price}
            ingredients= {each.Ingredients}
            />
          )}
        </CardColumns>
      </div>
    </div>
  );
}

export default Home